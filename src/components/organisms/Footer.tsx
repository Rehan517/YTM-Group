import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import Container from '@/components/layout/Container';
import { YTMLogo } from '@/assets';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Lending Solutions', href: '/services/lending' },
    { name: 'Financial Planning', href: '/services/financial-planning' },
    { name: 'Legal Services', href: '/services/legal' },
    { name: 'Business Insurance', href: '/services/business-insurance' },
    { name: 'Business Advisory', href: '/services/business-advisory' },
    { name: 'Property Services', href: '/services/property' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      <Container size="2xl">
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Company Info - Left Column */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                {/* Logo */}
                <Link to="/" className="inline-block">
                  <img
                    src={YTMLogo}
                    alt="YTM Group"
                    className="h-16 w-auto"
                  />
                </Link>

                {/* Company Description */}
                <p className="text-gray-300 text-base leading-relaxed max-w-md">
                  Leading financial planning and legal services firm in Australia, 
                  helping families build generational wealth through expert financial strategies.
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <PhoneIcon className="h-5 w-5 text-primary-400" />
                    <a 
                      href="tel:+61370469786" 
                      className="hover:text-white transition-colors duration-200"
                    >
                      +61 3 7046 9786
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                    <a 
                      href="mailto:info@ytmgroup.com.au"
                      className="hover:text-white transition-colors duration-200"
                    >
                      info@ytmgroup.com.au
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-gray-300">
                    <MapPinIcon className="h-5 w-5 text-primary-400 mt-0.5" />
                    <div>
                      <p>1 Princess St</p>
                      <p>Kew, VIC 3101</p>
                      <p>Australia</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* Navigation Links - Right Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                  <ul className="space-y-3">
                    {company.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal & Compliance */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Legal & Compliance</h3>
                  <ul className="space-y-3">
                    {legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Compliance Text */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                YTM GROUP PTY LTD (Australian Credit License:454991) is an Authorised Corporate Credit Representative of Australia of 
                Australian Finance Group Ltd (389087).
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-4xl mx-auto">
                YTM FINANCIAL PLANNING PTY Ltd is a Corporate Authorised Representative (1282852) of Lifespan Financial Planning Pty 
                Ltd AFSL 229892
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <p className="text-sm text-gray-400">
                © {currentYear} YTM Group. All rights reserved.
              </p>
              
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="h-5 w-5 bg-gray-400 hover:bg-white transition-colors duration-200 rounded"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 
