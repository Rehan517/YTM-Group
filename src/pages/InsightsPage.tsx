import React from 'react';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import Container from '@/components/layout/Container';

const InsightsPage: React.FC = () => {
  return (
    <main>
      <Container size="xl" padding="md" className="py-16">
        <Heading as="h1" size="4xl" className="mb-6">
          Insights & News
        </Heading>
        <Paragraph size="lg" className="max-w-4xl">
          Stay updated with the latest financial insights, market updates, 
          and expert advice from our team.
        </Paragraph>
      </Container>
    </main>
  );
};

export default InsightsPage; 