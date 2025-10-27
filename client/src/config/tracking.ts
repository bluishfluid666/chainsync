/**
 * Visitor Tracking Configuration
 * 
 * Update the TRACKING_API_URL with your Vercel deployment URL
 */

export const trackingConfig = {
  // Set to false to disable tracking
  enabled: true,

  // Your Vercel API URL (update after deployment)
  // Format: https://your-project-name.vercel.app
  apiUrl: 'https://chainsync-tracking.vercel.app',

  // Endpoint path
  endpoint: '/api/track',

  // Enable console logging for debugging
  debug: false,
};

/**
 * Track a visitor
 * @param page - Current page path
 * @param referrer - HTTP referrer
 */
export async function trackVisitor(page: string, referrer?: string) {
  if (!trackingConfig.enabled) return;

  try {
    const response = await fetch(`${trackingConfig.apiUrl}${trackingConfig.endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
        referrer: referrer || document.referrer || null,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      }),
      credentials: 'omit',
    });

    if (response.ok && trackingConfig.debug) {
      console.log('[ChainSync Tracking] Visitor tracked:', page);
    }
  } catch (error) {
    if (trackingConfig.debug) {
      console.error('[ChainSync Tracking] Error:', error);
    }
  }
}

