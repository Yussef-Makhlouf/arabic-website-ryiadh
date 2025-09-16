// Simple analytics tracking without client-side hooks
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Enhanced e-commerce tracking for service inquiries
export const trackServiceInquiry = (serviceName: string, method: string) => {
  event({
    action: 'service_inquiry',
    category: 'engagement',
    label: `${serviceName}_${method}`,
  })
}

// Track phone calls
export const trackPhoneCall = (source: string) => {
  event({
    action: 'phone_call',
    category: 'conversion',
    label: source,
    value: 1,
  })
}

// Track WhatsApp clicks
export const trackWhatsApp = (source: string) => {
  event({
    action: 'whatsapp_click',
    category: 'conversion',
    label: source,
    value: 1,
  })
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'conversion',
    label: formName,
    value: 1,
  })
}

// Simple Analytics component
export function Analytics() {
  return null
}