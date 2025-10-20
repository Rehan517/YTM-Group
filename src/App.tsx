import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer, GoogleAnalytics, ResourcePreloader } from '@/components';
import { YTMLogo } from '@/assets';
import AppRouter from '@/router/AppRouter';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

function App() {
  // Google Analytics Tracking ID (should be set via environment variables in production)
  const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

  // Critical images that should be preloaded for better performance
  const criticalImages: string[] = [
    // Additional critical images beyond what ResourcePreloader handles internally
    // HeroPNG and YTMLogo are already handled by ResourcePreloader
  ];

  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <SmoothScrollProvider>
          {/* Google Analytics */}
          <GoogleAnalytics 
            trackingId={GA_TRACKING_ID}
            enableDevelopmentTracking={false}
          />

          {/* Performance Optimizations */}
          <ResourcePreloader
            criticalImages={criticalImages}
            enableAnalytics={import.meta.env.DEV}
          />
          

          <div className="flex flex-col min-h-screen bg-gray-50 no-horizontal-scroll">
            <Header 
              logo={{
                src: YTMLogo,
                alt: 'YTM Group',
                href: '/'
              }}
            />
            
            <main className="flex-grow">
              <AppRouter />
            </main>
            
            <Footer />
          </div>
        </SmoothScrollProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
