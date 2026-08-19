import React from 'react';

export function InstagramIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <defs>
          <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="5%" stopColor="#fdf497" />
            <stop offset="45%" stopColor="#fd5949" />
            <stop offset="60%" stopColor="#d6249f" />
            <stop offset="90%" stopColor="#285AEB" />
          </linearGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#ig-grad)" />
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4z" fill="#ffffff" />
        <circle cx="16.8" cy="7.2" r="1.1" fill="#ffffff" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="#1877F2">
        <circle cx="12" cy="12" r="11" />
        <path
          d="M14.5 12h-2v7h-3v-7H8V9.5h1.5V8c0-2 1.2-3.1 3-3.1.9 0 1.6.1 1.9.1v2.1h-1.2c-1 0-1.2.5-1.2 1.2V9.5h2.4l-.4 2.5z"
          fill="#ffffff"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="2" y="4" width="20" height="16" rx="4.5" fill="#FF0000" />
        <polygon points="10 8.5 16 12 10 15.5" fill="#ffffff" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
        <circle cx="6.5" cy="6.5" r="1.5" fill="#ffffff" />
        <rect x="5" y="9.5" width="3" height="9.5" fill="#ffffff" />
        <path
          d="M10 9.5h2.8v1.3h.04c.4-.7 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19h-3v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V19H10V9.5z"
          fill="#ffffff"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="11" fill="#25D366" />
        <path
          d="M16.8 14.5c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7 1-.1.1-.3.1-.5 0-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4s-.5-1.3-.7-1.8c-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.2-.3-.3-.6-.4z"
          fill="#ffffff"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function GoogleMapsIcon({ className = "w-5 h-5", originalColor = false }) {
  if (originalColor) {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
        <circle cx="12" cy="9" r="2.8" fill="#ffffff" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
