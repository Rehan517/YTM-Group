import React from 'react';
import { Heading, Paragraph } from '@/components/atoms/Typography';
import Container from '@/components/layout/Container';

const ContactPage: React.FC = () => {
  return (
    <main>
      <Container size="xl" padding="md" className="py-16">
        <Heading as="h1" size="4xl" className="mb-6">
          Contact Us
        </Heading>
        <Paragraph size="lg" className="max-w-4xl">
          Get in touch with our team for personalized financial and legal advice.
        </Paragraph>
      </Container>
    </main>
  );
};

export default ContactPage; 