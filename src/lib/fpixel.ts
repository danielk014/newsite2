declare global {
  interface Window {
    fbq: any
  }
}

export const FB_PIXEL_ID = '1482839576301540'

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  window.fbq('track', name, options)
}

// Standard events
export const trackPurchase = (value: number, currency = 'USD') => {
  event('Purchase', { value, currency })
}

export const trackLead = () => {
  event('Lead')
}

export const trackCompleteRegistration = () => {
  event('CompleteRegistration')
}

export const trackAddToCart = (contentName: string, value?: number) => {
  event('AddToCart', { content_name: contentName, value })
}

export const trackViewContent = (contentName: string) => {
  event('ViewContent', { content_name: contentName })
}

export const trackInitiateCheckout = () => {
  event('InitiateCheckout')
}

export const trackAddPaymentInfo = () => {
  event('AddPaymentInfo')
}

export const trackContact = () => {
  event('Contact')
}

export const trackCustomizeProduct = () => {
  event('CustomizeProduct')
}

export const trackDonate = () => {
  event('Donate')
}

export const trackFindLocation = () => {
  event('FindLocation')
}

export const trackSchedule = () => {
  event('Schedule')
}

export const trackSearch = (searchString: string) => {
  event('Search', { search_string: searchString })
}

export const trackStartTrial = () => {
  event('StartTrial')
}

export const trackSubmitApplication = () => {
  event('SubmitApplication')
}

export const trackSubscribe = () => {
  event('Subscribe')
}