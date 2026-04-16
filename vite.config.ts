import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/QSAS-Aegis-X-Webpage/',
  plugins: [react()],

  server: {
    headers: securityHeaders(),
  },

  preview: {
    headers: securityHeaders(),
  },
})

function securityHeaders(): Record<string, string> {
  return {
    // Prevent MIME-type sniffing
    'X-Content-Type-Options': 'nosniff',
    // Block iframe embedding of THIS site by third parties
    'X-Frame-Options': 'SAMEORIGIN',
    // Force HTTPS for 1 year once deployed
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    // XSS protection (legacy browsers)
    'X-XSS-Protection': '1; mode=block',
    // Referrer policy
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // Permissions policy — disable unused browser features
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
    // Content Security Policy
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Allow video from CloudFront CDN
      "media-src 'self' https://d8j0ntlcm91z4.cloudfront.net",
      // Allow Gamma embed
      "frame-src 'self' https://gamma.app",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
    ].join('; '),
  }
}
