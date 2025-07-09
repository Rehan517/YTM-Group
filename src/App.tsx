import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from '@/components';
import { YTMLogo } from '@/assets';
import AppRouter from '@/router/AppRouter';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <Header 
          logo={{
            src: YTMLogo,
            alt: 'YTM Group',
            href: '/'
          }}
          showContact={false}
        />
        
        {/* Main Content Area */}
        <div className="flex-1">
          <AppRouter />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
