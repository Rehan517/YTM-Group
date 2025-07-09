import type { ReactNode } from 'react';

/**
 * Base props that all components should extend
 */
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  'data-testid'?: string;
} 