import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import Container from '@/components/layout/Container';
import Button from '@/components/atoms/Button';

const NotFoundPage: React.FC = () => {
  return (
    <main>
      <Container size="xl" padding="md" className="py-16">
        <div className="text-center">
          <Heading as="h1" size="6xl" className="mb-4">
            404
          </Heading>
          <Heading as="h2" size="2xl" className="mb-6">
            Page Not Found
          </Heading>
          <Paragraph size="lg" color="muted" className="mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </Paragraph>
          <Link to="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default NotFoundPage; 