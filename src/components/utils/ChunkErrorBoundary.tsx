import React, { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  isChunkError: boolean;
  retryCount: number;
}

class ChunkErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      isChunkError: false,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if this is a chunk loading error
    const isChunkError = error.message.includes('Loading chunk') || 
                        error.message.includes('Loading CSS chunk') ||
                        error.name === 'ChunkLoadError' ||
                        (error.stack?.includes('chunk') ?? false);

    return {
      hasError: true,
      error,
      isChunkError,
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error for debugging
    console.error('ChunkErrorBoundary caught an error:', error);
    console.error('Error Info:', errorInfo);

    // Call the onError callback if provided
    this.props.onError?.(error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error tracking service
      // errorTracker.captureException(error, { extra: errorInfo });
    }
  }

  handleRetry = () => {
    const { retryCount } = this.state;
    
    if (retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        isChunkError: false,
        retryCount: prevState.retryCount + 1
      }));

      // For chunk errors, reload the page to get fresh chunks
      if (this.state.isChunkError) {
        window.location.reload();
      }
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI for chunk errors
      if (this.state.isChunkError) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-neutral-50">
            <div className="max-w-md w-full mx-4">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                {/* Error icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>

                {/* Error message */}
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Loading Error
                </h2>
                <p className="text-neutral-600 mb-6">
                  There was an error loading this page. This usually happens when the website has been updated.
                </p>

                {/* Action buttons */}
                <div className="space-y-3">
                  {this.state.retryCount < this.maxRetries ? (
                    <button
                      onClick={this.handleRetry}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                    </button>
                  ) : (
                    <button
                      onClick={this.handleReload}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                      Reload Page
                    </button>
                  )}
                  
                  <button
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Go to Home Page
                  </button>
                </div>

                {/* Technical details (development only) */}
                {process.env.NODE_ENV === 'development' && this.state.error && (
                  <details className="mt-6 text-left">
                    <summary className="cursor-pointer text-sm text-neutral-500 hover:text-neutral-700">
                      Technical Details
                    </summary>
                    <pre className="mt-2 text-xs bg-neutral-100 p-3 rounded overflow-auto text-red-600">
                      {this.state.error.stack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </div>
        );
      }

      // Custom fallback provided by parent
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Generic error fallback
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                Something went wrong
              </h2>
              <p className="text-neutral-600 mb-6">
                An unexpected error occurred. Please try refreshing the page.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={this.handleReload}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Refresh Page
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkErrorBoundary; 