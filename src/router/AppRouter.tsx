import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/utils/ScrollToTop';
import ChunkErrorBoundary from '../components/utils/ChunkErrorBoundary';
import { RouteLoader } from '../components/utils/PageLoader';
import PageTransition from '../components/animations/PageTransition';

// Lazy load all pages for code splitting
const HomePage = React.lazy(() => import('../pages/HomePage'));
const AboutPage = React.lazy(() => import('../pages/AboutPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const TestimonialsPage = React.lazy(() => import('../pages/TestimonialsPage'));
const LendingPage = React.lazy(() => import('../pages/LendingPage'));
const FinancialPlanningPage = React.lazy(() => import('../pages/FinancialPlanningPage'));
const LegalServicesPage = React.lazy(() => import('../pages/LegalServicesPage'));
const PropertyServicesPage = React.lazy(() => import('../pages/PropertyServicesPage'));
const BusinessAdvisoryPage = React.lazy(() => import('../pages/BusinessAdvisoryPage'));
const BusinessInsurancePage = React.lazy(() => import('../pages/BusinessInsurancePage'));
const PrivacyPolicyPage = React.lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsAndConditionsPage = React.lazy(() => import('../pages/TermsAndConditionsPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

// Enhanced route wrapper with error boundary, loading, and page transitions
const RouteWrapper: React.FC<{ 
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  routeName?: string;
}> = ({ component: Component, routeName }) => (
  <PageTransition routeName={routeName}>
    <ChunkErrorBoundary>
      <Suspense fallback={<RouteLoader routeName={routeName} />}>
        <Component />
      </Suspense>
    </ChunkErrorBoundary>
  </PageTransition>
);

const AppRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={<RouteWrapper component={HomePage} routeName="Home" />} 
        />
        <Route 
          path="/about" 
          element={<RouteWrapper component={AboutPage} routeName="About" />} 
        />
        <Route 
          path="/contact" 
          element={<RouteWrapper component={ContactPage} routeName="Contact" />} 
        />
        <Route 
          path="/testimonials" 
          element={<RouteWrapper component={TestimonialsPage} routeName="Testimonials" />} 
        />
        
        {/* Service Pages - Updated to match services.config.ts href paths */}
        <Route 
          path="/services/lending" 
          element={<RouteWrapper component={LendingPage} routeName="Lending Services" />} 
        />
        <Route 
          path="/services/financial-planning" 
          element={<RouteWrapper component={FinancialPlanningPage} routeName="Financial Planning" />} 
        />
        <Route 
          path="/services/legal" 
          element={<RouteWrapper component={LegalServicesPage} routeName="Legal Services" />} 
        />
        <Route 
          path="/services/property" 
          element={<RouteWrapper component={PropertyServicesPage} routeName="Property Services" />} 
        />
        <Route 
          path="/services/business-advisory" 
          element={<RouteWrapper component={BusinessAdvisoryPage} routeName="Business Advisory" />} 
        />
        <Route 
          path="/services/business-insurance" 
          element={<RouteWrapper component={BusinessInsurancePage} routeName="Business Insurance" />} 
        />
        
        {/* Legal Pages */}
        <Route 
          path="/privacy-policy" 
          element={<RouteWrapper component={PrivacyPolicyPage} routeName="Privacy Policy" />} 
        />
        <Route 
          path="/terms-and-conditions" 
          element={<RouteWrapper component={TermsAndConditionsPage} routeName="Terms and Conditions" />} 
        />
        
        {/* 404 Not Found Route */}
        <Route 
          path="*" 
          element={<RouteWrapper component={NotFoundPage} routeName="Page Not Found" />} 
        />
      </Routes>
    </>
  );
};

export default AppRouter; 