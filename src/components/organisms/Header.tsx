import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils';
import Container from '@/components/layout/Container';
import Button from '@/components/atoms/Button';
import { Link } from '@/components/atoms/Typography';

// Define NavigationItem interface
interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

interface HeaderProps {
  navigation?: NavigationItem[];
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
  };
  showContact?: boolean;
  sticky?: boolean;
  className?: string;
}

// Default navigation structure for YTM Group
const defaultNavigation: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    description: 'Learn about our company and team',
  },
  {
    label: 'Services',
    href: '/services',
    description: 'Our comprehensive financial and legal services',
    children: [
      { label: 'Mortgage Services', href: '/services/mortgage' },
      { label: 'Financial Planning', href: '/services/finance' },
      { label: 'Legal Services', href: '/services/legal' },
      { label: 'Business Advisory', href: '/services/business' },
      { label: 'Insurance', href: '/services/insurance' },
      { label: 'Property Services', href: '/services/property' },
    ],
  },
  {
    label: 'Team',
    href: '/team',
    description: 'Meet our experienced professionals',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
    description: 'What our clients say about us',
  },
  {
    label: 'Insights',
    href: '/insights',
    description: 'Financial insights and market updates',
  },
  {
    label: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team',
  },
];

// Animation variants for mobile menu
const mobileMenuVariants = {
  closed: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  open: {
    x: '0%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuItemVariants = {
  closed: {
    x: 50,
    opacity: 0,
  },
  open: {
    x: 0,
    opacity: 1,
  },
};

const menuContainerVariants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Header: React.FC<HeaderProps> = ({
  navigation = defaultNavigation,
  logo = {
    src: '/logo.svg',
    alt: 'YTM Group',
    href: '/',
  },
  contactInfo = {
    phone: '1800 123 456',
    email: 'info@ytmgroup.com.au',
  },
  showContact = true,
  sticky = true,
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClasses = cn(
    'bg-white border-b border-neutral-200 z-50',
    sticky && 'sticky top-0',
    className
  );

  return (
    <header className={headerClasses}>
      {/* Contact Info Bar */}
      {showContact && contactInfo && (
        <div className="bg-primary-50 border-b border-primary-100">
          <Container size="2xl" padding="sm">
            <div className="flex items-center justify-between text-sm">
              <div className="hidden md:flex items-center space-x-6">
                {contactInfo.phone && (
                  <Link
                    href={`tel:${contactInfo.phone}`}
                    variant="primary"
                    className="flex items-center space-x-2"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>{contactInfo.phone}</span>
                  </Link>
                )}
                {contactInfo.email && (
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    variant="primary"
                    className="flex items-center space-x-2"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    <span>{contactInfo.email}</span>
                  </Link>
                )}
              </div>
              <div className="text-primary-700">
                Professional Financial & Legal Services
              </div>
            </div>
          </Container>
        </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-white">
        <Container size="2xl" padding="md">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <img
                  className="h-12 w-auto"
                  src={logo.src}
                  alt={logo.alt}
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          <Popover.Button
                            className={cn(
                              'flex items-center text-slate-700 hover:text-primary-600',
                              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                              'transition-colors duration-200 px-3 py-2 rounded-md',
                              open && 'text-primary-600'
                            )}
                          >
                            {item.label}
                            <ChevronDownIcon
                              className={cn(
                                'ml-1 h-4 w-4 transition-transform duration-200',
                                open && 'rotate-180'
                              )}
                            />
                          </Popover.Button>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel className="absolute left-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="py-1">
                                {item.children?.map((subItem: NavigationItem) => (
                                  <NavLink
                                    key={subItem.label}
                                    to={subItem.href}
                                    className={({ isActive }) => cn(
                                      'block px-4 py-2 text-sm transition-colors duration-200',
                                      isActive 
                                        ? 'bg-primary-50 text-primary-600' 
                                        : 'text-slate-700 hover:bg-neutral-50 hover:text-primary-600'
                                    )}
                                  >
                                    {subItem.label}
                                  </NavLink>
                                ))}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => cn(
                        'px-3 py-2 rounded-md transition-colors duration-200',
                        isActive
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-slate-700 hover:text-primary-600'
                      )}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Get Quote
              </Button>

              {/* Mobile menu button with animated hamburger */}
              <motion.button
                type="button"
                className="lg:hidden p-2 rounded-md text-slate-700 hover:text-primary-600 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => setMobileMenuOpen(true)}
                whileTap={{ scale: 0.95 }}
                {...({} as any)}
              >
                <span className="sr-only">Open main menu</span>
                <motion.div
                  animate={mobileMenuOpen ? 'open' : 'closed'}
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 180 },
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-6 w-6" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            static
          >
            {/* Backdrop */}
            <motion.div
              {...({
                className: "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
                onClick: () => setMobileMenuOpen(false)
              } as any)}
            />
            
            {/* Menu Panel */}
            <motion.div
              {...({
                className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10",
                variants: mobileMenuVariants,
                initial: "closed",
                animate: "open",
                exit: "closed"
              } as any)}
            >
              <div className="flex items-center justify-between">
                <NavLink to="/" className="flex items-center">
                  <img
                    className="h-12 w-auto"
                    src={logo.src}
                    alt={logo.alt}
                  />
                </NavLink>
                <motion.button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  {...({} as any)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>
              </div>
              
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10">
                  <motion.div
                    {...({
                      className: "space-y-2 py-6",
                      variants: menuContainerVariants,
                      initial: "closed",
                      animate: "open",
                      exit: "closed"
                    } as any)}
                  >
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.label}
                        variants={menuItemVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.children ? (
                          <Disclosure as="div" className="-mx-3">
                            {({ open }) => (
                              <>
                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-800 hover:bg-neutral-50">
                                  {item.label}
                                  <motion.div
                                    animate={{ rotate: open ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronDownIcon className="h-5 w-5 flex-none" />
                                  </motion.div>
                                </Disclosure.Button>
                                <Disclosure.Panel className="mt-2 space-y-2">
                                  {item.children?.map((subItem: NavigationItem) => (
                                    <NavLink
                                      key={subItem.label}
                                      to={subItem.href}
                                      className={({ isActive }) => cn(
                                        'block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 transition-colors duration-200',
                                        isActive
                                          ? 'bg-primary-50 text-primary-600'
                                          : 'text-slate-700 hover:bg-neutral-50'
                                      )}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.label}
                                    </NavLink>
                                  ))}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ) : (
                          <NavLink
                            to={item.href}
                            className={({ isActive }) => cn(
                              '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200',
                              isActive
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-slate-800 hover:bg-neutral-50'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    {...({
                      className: "py-6",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6 }
                    } as any)}
                  >
                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 