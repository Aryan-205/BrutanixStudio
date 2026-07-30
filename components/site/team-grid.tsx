import Image from "next/image";
import { Eyebrow, Shell, Statement } from "@/components/ui/primitives";

const TEAM = [
  {
    name: "Marc Delacroix",
    role: "Founder, Creative Director",
    photo: "/images/person-2.jpg",
  },
  {
    name: "Ava Lindqvist",
    role: "Design Lead",
    photo: "/images/person-4.jpg",
  },
  {
    name: "Noor Haddad",
    role: "Brand Strategist",
    photo: "/images/person-3.jpg",
  },
  {
    name: "Elias Moreau",
    role: "Design Engineer",
    photo: "/images/person-1.jpg",
  },
];

export function TeamGrid() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
          <Eyebrow className="text-black/45">(The studio)</Eyebrow>
          <Statement className="max-w-[24ch] lg:justify-self-end lg:text-right">
            Four people,{" "}
            <span className="text-black/35">one shared standard.</span>
          </Statement>
        </div>

        <ul className="reveal-children mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((person) => (
            <li key={person.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-1.5 text-base text-black/45">{person.role}</p>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
