import Image from "next/image";

/**
 * Team faces. Photography is from Unsplash (free to use, no attribution
 * required) and is served locally from /public/images so the page makes no
 * third-party requests.
 */
const FACES = [
  { src: "/images/person-4.jpg", alt: "" },
  { src: "/images/person-2.jpg", alt: "" },
  { src: "/images/person-3.jpg", alt: "" },
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
          key={face.src}
          className={`relative size-9 overflow-hidden rounded-full bg-volt ring-2 ${ringClass} ${
            i > 0 ? "-ml-3" : ""
          }`}
        >
          <Image
            src={face.src}
            alt=""
            fill
            sizes="36px"
            className="object-cover"
          />
        </span>
      ))}
    </div>
  );
}

/** Single testimonial author avatar. */
export function Avatar({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`relative size-11 shrink-0 overflow-hidden rounded-full bg-volt ${className}`}
    >
      <Image src={src} alt="" fill sizes="44px" className="object-cover" />
    </span>
  );
}
