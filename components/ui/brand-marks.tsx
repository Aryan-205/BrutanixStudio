/**
 * Client logos, drawn inline so the page carries no image requests.
 * Each mark is a simplified geometric reduction paired with its wordmark set
 * in the display face.
 */

function CoinbaseGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-2.4-13.2a.8.8 0 0 0-.8.8v4.8a.8.8 0 0 0 .8.8h4.8a.8.8 0 0 0 .8-.8V9.6a.8.8 0 0 0-.8-.8H9.6Z"
      />
    </svg>
  );
}

export function CoinbaseMark() {
  return (
    <span className="flex items-center gap-2 text-ink/85">
      <CoinbaseGlyph className="size-5" />
      <span className="font-display text-base font-semibold tracking-tight">
        coinbase
      </span>
    </span>
  );
}

export function SlackMark() {
  return (
    <span className="flex items-center gap-2 text-ink/85">
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <rect x="7.2" y="2" width="3.6" height="8.8" rx="1.8" />
        <rect x="13.2" y="13.2" width="3.6" height="8.8" rx="1.8" />
        <rect x="2" y="13.2" width="8.8" height="3.6" rx="1.8" />
        <rect x="13.2" y="7.2" width="8.8" height="3.6" rx="1.8" />
      </svg>
      <span className="font-display text-base font-semibold tracking-tight">
        slack
      </span>
    </span>
  );
}

export function SpotifyMark() {
  return (
    <span className="flex items-center gap-2 text-ink/85">
      <svg viewBox="0 0 24 24" className="size-5">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <g fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
          <path d="M6.9 9.3c3.4-1 7-.7 9.8 1" />
          <path d="M7.7 12.4c2.7-.8 5.6-.5 7.9 1" />
          <path d="M8.5 15.4c2-.6 4.2-.4 5.9.8" />
        </g>
      </svg>
      <span className="font-display text-base font-semibold tracking-tight">
        Spotify
      </span>
    </span>
  );
}

export function WebflowMark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 text-ink/85 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M23 3.6 16.1 20.4h-4.6l1.7-6.5c-2.5 4-6.4 6-11.7 6.5L3.7 14c2 0 3.9-1.4 3.9-3.7S6 6.7 4 6.7H1.2l2.4-3.1h5.5L7.4 8.2c2.3-3.2 5.6-4.6 10-4.6H23Z" />
      </svg>
      <span className="font-display text-base font-semibold tracking-tight">
        Webflow
      </span>
    </span>
  );
}

export function TrustpilotMark({
  tone = "light",
}: {
  /** `dark` sets the wordmark for placement on the ink/mesh surfaces. */
  tone?: "light" | "dark";
}) {
  return (
    <span className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="size-4 text-[#00b67a]">
        <path
          fill="currentColor"
          d="M12 2.4 15.1 9l7.1.8-5.3 4.8 1.5 7L12 18l-6.4 3.6 1.5-7L1.8 9.8 8.9 9 12 2.4Z"
        />
      </svg>
      <span
        className={`font-display text-sm font-semibold tracking-tight ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        Trustpilot
      </span>
    </span>
  );
}
