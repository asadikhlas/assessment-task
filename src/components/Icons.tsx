import type { SVGProps } from 'react';

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.8V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 3.8V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 13H11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 13H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function DuplicateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="7" y="7" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4" y="4" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function GuideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12.7 4.4C13.7 3.1 15.3 2.5 16.8 2.9C18.9 3.4 20.2 5.5 19.8 7.6L18.2 15.7C17.9 17.5 16.5 18.8 14.8 19.1L8.9 20.2C6.5 20.6 4.3 18.6 4.6 16.1L5.7 8.3C6 6.4 7.5 4.9 9.4 4.7L12.7 4.4Z" fill="#f4d44f" stroke="#7a6510" strokeWidth="1.2" />
      <path d="M13.5 7.2C14.9 7 16.1 8.2 15.9 9.6" stroke="#7a6510" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.2 14.8L14.9 9.1" stroke="#7a6510" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill="#7dd3fc" />
      <path d="M18.2 15.2L19 17.6L21.4 18.4L19 19.2L18.2 21.6L17.4 19.2L15 18.4L17.4 17.6L18.2 15.2Z" fill="#8b7cf6" />
    </svg>
  );
}
