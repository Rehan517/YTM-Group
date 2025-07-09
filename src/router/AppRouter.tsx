import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all page components for code splitting
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage'));
const LendingPage = React.lazy(() => import('@/pages/LendingPage'));
const FinancialPlanningPage = React.lazy(() => import('@/pages/FinancialPlanningPage'));
const LegalServicesPage = React.lazy(() => import('@/pages/LegalServicesPage'));
const BusinessInsurancePage = React.lazy(() => import('@/pages/BusinessInsurancePage'));
const BusinessAdvisoryPage = React.lazy(() => import('@/pages/BusinessAdvisoryPage'));
const PropertyServicesPage = React.lazy(() => import('@/pages/PropertyServicesPage'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

// Simple loading component
const SimpleLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* About Route */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* Contact Route */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesPage />} />
        
        {/* Individual Service Pages */}
        <Route path="/services/lending" element={<LendingPage />} />
        <Route path="/services/financial-planning" element={<FinancialPlanningPage />} />
        <Route path="/services/legal-services" element={<LegalServicesPage />} />
        <Route path="/services/business-insurance" element={<BusinessInsurancePage />} />
        <Route path="/services/business-advisory" element={<BusinessAdvisoryPage />} />
        <Route path="/services/property-services" element={<PropertyServicesPage />} />
        
        {/* Fallback for unmatched service routes */}
        <Route path="/services/:serviceId" element={<ServicesPage />} />
        
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter; 