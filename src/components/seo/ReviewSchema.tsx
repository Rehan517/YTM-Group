import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { Testimonial } from '@/types';

interface ReviewSchemaProps {
  testimonials?: Testimonial[];
  businessInfo?: {
    name: string;
    description?: string;
    url?: string;
    telephone?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    sameAs?: string[];
  };
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating?: number;
    worstRating?: number;
  };
  includeOrganizationSchema?: boolean;
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  testimonials = [],
  businessInfo,
  aggregateRating,
  includeOrganizationSchema = true,
}) => {
  // Generate individual review schemas
  const generateReviewSchemas = () => {
    return testimonials.slice(0, 10).map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: testimonial.content,
      datePublished: testimonial.date,
      publisher: {
        '@type': 'Organization',
        name: businessInfo?.name || 'YTM Group',
      },
      itemReviewed: {
        '@type': 'FinancialService',
        name: testimonial.service || 'Financial Services',
        provider: {
          '@type': 'Organization',
          name: businessInfo?.name || 'YTM Group',
        },
      },
    }));
  };

  // Generate aggregate rating schema
  const generateAggregateRatingSchema = () => {
    if (!aggregateRating) return null;

    return {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating || 5,
      worstRating: aggregateRating.worstRating || 1,
    };
  };

  // Generate organization/business schema
  const generateOrganizationSchema = () => {
    if (!includeOrganizationSchema || !businessInfo) return null;

    const organizationSchema: any = {
      '@type': 'FinancialService',
      '@id': businessInfo.url ? `${businessInfo.url}#organization` : undefined,
      name: businessInfo.name,
      description: businessInfo.description,
      url: businessInfo.url,
      telephone: businessInfo.telephone,
      sameAs: businessInfo.sameAs,
    };

    if (businessInfo.address) {
      organizationSchema.address = {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address.streetAddress,
        addressLocality: businessInfo.address.addressLocality,
        addressRegion: businessInfo.address.addressRegion,
        postalCode: businessInfo.address.postalCode,
        addressCountry: businessInfo.address.addressCountry,
      };
    }

    if (aggregateRating) {
      organizationSchema.aggregateRating = generateAggregateRatingSchema();
    }

    return organizationSchema;
  };

  // Generate FAQ schema for common questions based on testimonials
  const generateFAQSchema = () => {
    const commonQuestions = [
      {
        question: 'What do clients say about YTM Group\'s services?',
        answer: testimonials.slice(0, 3).map(t => `"${t.content}" - ${t.name}, ${t.company || 'Client'}`).join(' '),
      },
      {
        question: 'How satisfied are YTM Group\'s clients?',
        answer: `Our clients consistently rate our services highly, with an average rating of ${aggregateRating?.ratingValue || 5} out of 5 stars across ${aggregateRating?.reviewCount || testimonials.length} reviews.`,
      },
    ];

    return {
      '@type': 'FAQPage',
      mainEntity: commonQuestions.map(qa => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: qa.answer,
        },
      })),
    };
  };

  // Main schema combining all elements
  const generateMainSchema = () => {
    const organizationSchema = generateOrganizationSchema();
    const reviewSchemas = generateReviewSchemas();
    const faqSchema = generateFAQSchema();

    // Create array of all schemas
    const schemas = [];

    if (organizationSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        ...organizationSchema,
      });
    }

    if (reviewSchemas.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: reviewSchemas.map((review, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: review,
        })),
      });
    }

    if (testimonials.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        ...faqSchema,
      });
    }

    return schemas;
  };

  const schemas = generateMainSchema();

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </Helmet>
  );
};

export default ReviewSchema; 