/**
 * Decorative marks.
 *
 * These fill the slots that used to carry headline metrics. They are pure
 * ornament: every one is `aria-hidden`, none of them encodes a value, and the
 * copy beside them always states the point on its own.
 *
 * Gradient ids are static per component, which is safe because each mark is
 * drawn at most once per page in its gradient form — the same trade the
 * project stills in `mockups.tsx` already make.
 */

const GRADIENT_STOPS = (
  <>
    <stop offset="0%" stopColor="#4a62f6" />
    <stop offset="52%" stopColor="#6366f1" />
    <stop offset="100%" stopColor="#a855f7" />
  </>
);

/**
 * Concentric arcs blooming out of the bottom-left corner. Reads as expansion
 * without claiming an amount.
 */
export function ArcBloom({
  className = "",
  tone = "gradient",
}: {
  className?: string;
  tone?: "gradient" | "current";
}) {
  const stroke = tone === "gradient" ? "url(#arc-bloom)" : "currentColor";

  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {tone === "gradient" && (
        <defs>
          <linearGradient id="arc-bloom" x1="0" y1="1" x2="1" y2="0">
            {GRADIENT_STOPS}
          </linearGradient>
        </defs>
      )}
      {[22, 44, 66, 88].map((r, i) => (
        <path
          key={r}
          d={`M 0 ${96 - r} A ${r} ${r} 0 0 1 ${r} 96`}
          stroke={stroke}
          strokeWidth={i === 0 ? 9 : 7 - i}
          strokeLinecap="round"
          opacity={1 - i * 0.16}
        />
      ))}
      <circle cx="4" cy="92" r="4" fill={stroke} />
    </svg>
  );
}

/** Three-by-three lattice of the brand petal, fading toward the corner. */
export function PetalLattice({ className = "" }: { className?: string }) {
  const cells = [0, 1, 2].flatMap((row) =>
    [0, 1, 2].map((col) => ({ row, col })),
  );

  return (
    <svg
      viewBox="0 0 120 120"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {cells.map(({ row, col }) => (
        <g
          key={`${row}-${col}`}
          transform={`translate(${col * 44 + 8} ${row * 44 + 8}) scale(0.58)`}
          opacity={1 - (row + col) * 0.13}
        >
          {[0, 90, 180, 270].map((angle) => (
            <path
              key={angle}
              d="M24 24C15 15 14 5 24 2c10 3 9 13 0 22Z"
              transform={`rotate(${angle} 24 24)`}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

/** Dot lattice with a few chords drawn across it — reach, not a count. */
export function NodeWeb({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 10, y: 82 },
    { x: 38, y: 54 },
    { x: 30, y: 14 },
    { x: 70, y: 30 },
    { x: 96, y: 68 },
    { x: 62, y: 92 },
  ];

  return (
    <svg
      viewBox="0 0 110 110"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.45">
        <path d="M10 82 L38 54 L30 14 M38 54 L70 30 L96 68 L62 92 L38 54" />
      </g>
      {nodes.map((node, i) => (
        <circle
          key={`${node.x}-${node.y}`}
          cx={node.x}
          cy={node.y}
          r={i === 1 ? 7 : 4.5}
          fill="currentColor"
          opacity={i === 1 ? 1 : 0.7}
        />
      ))}
    </svg>
  );
}

/** Offset stack of rounded slabs — a body of work, unquantified. */
export function MonolithStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={i * 9}
          y={i * 21}
          width={96 - i * 12}
          height="14"
          rx="7"
          opacity={1 - i * 0.2}
        />
      ))}
    </svg>
  );
}

/**
 * Diagonal stripe band. Used where a numeric row used to sit and the layout
 * still wants something with weight in it.
 */
export function StripeField({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 40"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={className}
    >
      <defs>
        <linearGradient id="stripe-field" x1="0" y1="0" x2="1" y2="0">
          {GRADIENT_STOPS}
        </linearGradient>
        <pattern
          id="stripe-field-pattern"
          width="10"
          height="40"
          patternUnits="userSpaceOnUse"
          patternTransform="skewX(-24)"
        >
          <rect width="4" height="40" fill="url(#stripe-field)" />
        </pattern>
      </defs>
      <rect width="200" height="40" fill="url(#stripe-field-pattern)" />
    </svg>
  );
}

/**
 * Four nested rounded squares on a shared corner — used where a rating figure
 * used to be. Deliberately not five, so it is never read as a star count.
 */
export function SignalMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={8 + i * 14}
          y={8 + i * 14}
          width={104 - i * 28}
          height={104 - i * 28}
          rx={26 - i * 6}
          stroke="currentColor"
          strokeWidth={i === 3 ? 8 : 3}
          opacity={0.3 + i * 0.23}
        />
      ))}
    </svg>
  );
}
