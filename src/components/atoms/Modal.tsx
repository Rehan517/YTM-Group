import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import type { BaseComponentProps } from '@/types';

interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  children,
  className = '',
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const scrollPosition = useRef<number>(0);

  // Focus management and scroll preservation
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      scrollPosition.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Store previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the modal without scrolling (with a small delay to ensure it's rendered)
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus({ preventScroll: true });
        }
      }, 10);
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Restore focus to previously focused element without scrolling
      if (previousActiveElement.current) {
        previousActiveElement.current.focus({ preventScroll: true });
      }
      
      // Restore scroll position with a small delay
      setTimeout(() => {
        window.scrollTo(0, scrollPosition.current);
      }, 10);
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      const modal = modalRef.current;
      if (!modal) return;

      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-[90vw] max-w-sm sm:max-w-md';
      case 'md':
        return 'w-[90vw] max-w-sm sm:max-w-lg';
      case 'lg':
        return 'w-[92vw] max-w-sm sm:max-w-2xl';
      case 'xl':
        return 'w-[92vw] max-w-sm sm:max-w-4xl';
      case 'full':
        return 'w-[92vw] max-w-sm sm:max-w-7xl mx-4';
      default:
        return 'w-[90vw] max-w-sm sm:max-w-lg';
    }
  };

  if (!isOpen) {
    return null;
  }

  const modalUI = (
    <div
      className="fixed inset-0 z-[99999]"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-modal="true"
      role="dialog"
      {...props}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 z-0 bg-black/50 transition-opacity duration-300"
        onClick={handleBackdropClick}
      />
      
      {/* Modal container */}
      <div className="relative z-10 grid min-h-screen place-items-center p-3 sm:p-4">
        <div
          ref={modalRef}
          className={`
            relative w-full bg-white rounded-lg sm:rounded-2xl shadow-2xl
            max-h-[88vh] sm:max-h-[85vh] flex flex-col overflow-hidden
            ${getSizeClasses()}
            ${className}
          `}
          tabIndex={-1}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-neutral-200 flex-shrink-0">
              {title && (
                <h2 id="modal-title" className="text-base sm:text-lg lg:text-xl font-bold text-neutral-800 pr-2 leading-tight break-words flex-1">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              )}
            </div>
          )}
          
          {/* Content */}
          <div className="px-3 sm:px-6 py-3 sm:py-4 overflow-y-auto flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalUI, document.body);
};

export default Modal; 