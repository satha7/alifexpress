/**
 * Google Ads & Analytics tracking utilities for AW-18542874639
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const GOOGLE_ADS_ID = 'AW-18542874639';

/**
 * Tracks lead conversions to Google Ads when a visitor clicks WhatsApp or Call
 */
export const trackConversion = (type: 'whatsapp' | 'phone', label?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // Standard conversion event for Google Ads
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
      event_category: 'Contact Lead',
      event_label: label || (type === 'whatsapp' ? 'WhatsApp Lead' : 'Phone Call Lead'),
      value: 1.0,
      currency: 'SAR',
    });

    // Custom named event for Google Analytics / Ads tracking
    window.gtag('event', type === 'whatsapp' ? 'whatsapp_click' : 'phone_click', {
      method: type,
      source: label || 'website',
    });
  }
};
