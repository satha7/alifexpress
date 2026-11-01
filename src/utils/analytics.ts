/**
 * Google Ads Conversion Tracking for AW-18542874639
 * Event snippet for conversion action: AW-18542874639/_e93COmpma0dEI-g94lF
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export const GOOGLE_ADS_ID = 'AW-18542874639';
export const GOOGLE_ADS_CONVERSION_TAG = 'AW-18542874639/_e93COmpma0dEI-g94lF';

/**
 * Fires the exact Google Ads Conversion Event
 */
export const trackConversion = (type: 'whatsapp' | 'phone', label?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    // 1. Google Ads specific conversion action (إضافة إلى سلة التسوق / طلب الحجز)
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONVERSION_TAG,
      value: 1.0,
      currency: 'SAR',
    });

    // 2. Custom analytics event for channel attribution
    window.gtag('event', type === 'whatsapp' ? 'whatsapp_click' : 'phone_click', {
      method: type,
      source: label || 'website',
      event_category: 'Lead',
    });
  }
};

// Expose gtag_report_conversion helper on window for Google Tag Assistant compatibility
if (typeof window !== 'undefined') {
  window.gtag_report_conversion = (url?: string) => {
    trackConversion('whatsapp', 'Google Tag Assistant Test');
    if (url) {
      window.location.href = url;
    }
    return false;
  };
}
