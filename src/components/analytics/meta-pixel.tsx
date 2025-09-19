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

// Helper function to track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters)
  }
}

// Common event tracking functions
export const trackPurchase = (value: number, currency: string = 'USD') => {
  trackEvent('Purchase', { value, currency })
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