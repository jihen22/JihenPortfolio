/**
 * Suppress known harmless console errors from external libraries
 * This helps keep the console clean while debugging your own code
 */

export function suppressKnownErrors() {
  if (typeof window === 'undefined') return;

  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;

  // Suppress specific known errors
  console.error = function (...args: any[]) {
    const errorMessage = args[0]?.toString() || '';
    
    // Suppress getInstalledRelatedApps error from react-social-media-embed
    if (errorMessage.includes('getInstalledRelatedApps')) {
      return;
    }
    
    // Suppress manifest.json 429 errors
    if (errorMessage.includes('manifest.json') && errorMessage.includes('429')) {
      return;
    }

    // Call original console.error for other errors
    originalError.apply(console, args);
  };

  console.warn = function (...args: any[]) {
    const warnMessage = args[0]?.toString() || '';
    
    // Suppress Video.js warnings
    if (warnMessage.includes('VIDEOJS') || warnMessage.includes('video.js')) {
      return;
    }

    // Call original console.warn for other warnings
    originalWarn.apply(console, args);
  };

  // Also suppress unhandled promise rejections for these specific errors
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason?.toString() || '';
    
    if (reason.includes('getInstalledRelatedApps') || reason.includes('manifest.json')) {
      event.preventDefault();
    }
  });
}

