type TwitchIconProps = {
  className?: string;
};

export function TwitchIcon({ className }: TwitchIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5 2 3 6.5V20h4v2h3l2-2h4l5-5V2H5zm14 11-3 3h-5l-2 2v-2H7V4h12v9zm-2-6h-2v5h2V7zm-5 0h-2v5h2V7z"
      />
    </svg>
  );
}
