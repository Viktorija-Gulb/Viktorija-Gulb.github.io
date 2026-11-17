type IconProps = {
  size?: number
}

export const LinkedInIcon = ({ size = 24 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
    <path
      d="M7.1 9.2V17H4.7V9.2h2.4Zm-1.2-1A1.45 1.45 0 1 1 5.9 5.3a1.45 1.45 0 0 1 0 2.9ZM9.2 9.2h2.3v1.06h.03c.32-.6 1.1-1.23 2.27-1.23 2.43 0 2.88 1.6 2.88 3.69V17h-2.4v-3.8c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V17H9.2V9.2Z"
      fill="white"
    />
  </svg>
)
