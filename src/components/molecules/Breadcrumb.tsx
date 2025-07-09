import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Generate breadcrumb items from current path
const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const pathParts = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' }
  ];

  let currentPath = '';
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    
    // Convert path parts to readable labels
    const label = part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label,
      href: currentPath,
      current: index === pathParts.length - 1
    });
  });

  return breadcrumbs;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items,
  className 
}) => {
  const location = useLocation();
  const breadcrumbs = items || generateBreadcrumbs(location.pathname);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/' && !items) {
    return null;
  }

  return (
    <nav 
      className={cn('flex', className)} 
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon 
                className="h-4 w-4 text-neutral-400 mx-2" 
                aria-hidden="true" 
              />
            )}
            <div className="flex items-center">
              {index === 0 && (
                <HomeIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              )}
              {breadcrumb.current ? (
                <span 
                  className="text-sm font-medium text-neutral-500"
                  aria-current="page"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 