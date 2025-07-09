import React from 'react';
import Container from '@/components/layout/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="2xl" padding="lg">
        <div className="text-center py-8">
          <p className="text-gray-300">© 2024 YTM Group. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 