"use client"

import Script from "next/script"

interface XPixelProps {
  pixelId: string
}

export function XPixel({ pixelId }: XPixelProps) {
  return (
    <>
      {/* X (Twitter) Conversion Tracking Base Code */}
      <Script 
        id="x-pixel" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','${pixelId}');
          `
        }}
      />
    </>
  )
}

declare global {
  interface Window {
    twq?: (...args: unknown[]) => void;
  }
}

// Helper function to track custom events
export const trackXEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.twq) {
    window.twq('event', eventName, parameters)
  }
}

// Common event tracking functions for X
export const trackXPurchase = (value: number, currency: string = 'USD') => {
  trackXEvent('tw-od7gi-od7gj', { value, currency })
}

export const trackXLead = () => {
  trackXEvent('tw-od7gi-od7gk')
}

export const trackXPageView = () => {
  trackXEvent('tw-od7gi-od7gh')
}