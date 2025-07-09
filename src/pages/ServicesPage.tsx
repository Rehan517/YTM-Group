import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import Container from '@/components/layout/Container';

const ServicesPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId?: string }>();

  return (
    <main>
      <Container size="xl" padding="md" className="py-16">
        {serviceId ? (
          <>
            <Heading as="h1" size="4xl" className="mb-6 capitalize">
              {serviceId.replace('-', ' ')} Services
            </Heading>
            <Paragraph size="lg" className="max-w-4xl">
              Detailed information about our {serviceId.replace('-', ' ')} services 
              and how we can help you achieve your goals.
            </Paragraph>
          </>
        ) : (
          <>
            <Heading as="h1" size="4xl" className="mb-6">
              Our Services
            </Heading>
            <Paragraph size="lg" className="max-w-4xl">
              Explore our comprehensive range of financial and legal services 
              designed to meet your personal and business needs.
            </Paragraph>
          </>
        )}
      </Container>
    </main>
  );
};

export default ServicesPage; 