"use client"

import Script from "next/script"

interface MetaPixelProps {
  pixelId: string
}

export function MetaPixel({ pixelId }: MetaPixelProps) {
  return (
    <>
      {/* Meta Pixel Code */}
      <Script 
        id="meta-pixel" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Helper function to track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters)
  }
}

// Common event tracking functions
export const trackPurchase = (value: number, currency: string = 'USD') => {
  trackEvent('Purchase', { value, currency })
}

// Lead tracking for button clicks (not actual purchases)
export const trackCreatorCampLead = () => {
  trackLead()
}

// Specific purchase tracking for Creator Camp Academy
export const trackCreatorCampPurchase = (value: number = 5) => {
  trackPurchase(value, 'USD')
}

// Function to be called by LaunchPass webhook or success callback
export const trackValidatedPurchase = (transactionId: string, value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log('✅ Tracking webhook-validated purchase:', { transactionId, value, currency })
    window.fbq('track', 'Purchase', { 
      value, 
      currency,
      content_type: 'product',
      content_ids: ['creator-camp'],
      content_name: 'Creator Camp Course',
      transaction_id: transactionId
    })
  }
}

export const trackAddToCart = (contentName: string, value?: number) => {
  trackEvent('AddToCart', { content_name: contentName, value })
}

export const trackLead = () => {
  trackEvent('Lead')
}

export const trackCompleteRegistration = () => {
  trackEvent('CompleteRegistration')
}

export const trackViewContent = (contentName: string) => {
  trackEvent('ViewContent', { content_name: contentName })
}