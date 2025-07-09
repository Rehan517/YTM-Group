import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import Container from '@/components/layout/Container';

const InsightDetailPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();

  return (
    <main>
      <Container size="xl" padding="md" className="py-16">
        <Heading as="h1" size="4xl" className="mb-6">
          Insight Post: {postId}
        </Heading>
        <Paragraph size="lg" className="max-w-4xl">
          This is a detailed view of the insight post with ID: {postId}. 
          Here you would find the full article content, author information, 
          and related posts.
        </Paragraph>
      </Container>
    </main>
  );
};

export default InsightDetailPage; 