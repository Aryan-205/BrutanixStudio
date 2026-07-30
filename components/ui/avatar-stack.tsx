const FACES = [
  { initials: "AR", tone: "from-[#ffd9a3] to-[#e39a5f]" },
  { initials: "MK", tone: "from-[#c4d0ff] to-[#7b8cf0]" },
  { initials: "JS", tone: "from-[#ffc9c2] to-[#d97a68]" },
] as const;

/**
 * Overlapping team avatars. Decorative — the surrounding copy already names
 * who these people are, so they stay out of the accessibility tree.
 */
export function AvatarStack({
  className = "",
  ringClass = "ring-paper",
}: {
  className?: string;
  ringClass?: string;
}) {
  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      {FACES.map((face, i) => (
        <span
          key={face.initials}
          className={`grid size-7 place-items-center rounded-full bg-gradient-to-br text-[8.5px] font-bold text-ink/70 ring-2 ${face.tone} ${ringClass} ${
            i > 0 ? "-ml-2.5" : ""
          }`}
        >
          {face.initials}
        </span>
      ))}
    </div>
  );
}

/** Single testimonial author avatar. */
export function Avatar({
  initials,
  className = "",
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#ffd9a3] to-[#d98a52] text-[11px] font-bold text-ink/70 ${className}`}
    >
      {initials}
    </span>
  );
}
