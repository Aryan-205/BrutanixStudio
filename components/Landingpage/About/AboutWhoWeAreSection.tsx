import { Reveal } from "@/components/motion/Reveal";
import { BodyText, EditorialLayout } from "./shared";

const paragraphs = [
  "We are a team of strategists, designers, content creators, developers, automation specialists, and growth marketers focused on helping brands scale smarter.",
  "Our approach is simple: understand the business, build the strategy, create the assets, launch with precision, and optimize continuously.",
];

export default function AboutWhoWeAreSection() {
  return (
    <EditorialLayout label="Who We Are" variant="muted">
      <Reveal>
        <div className="flex flex-col gap-7 md:gap-9">
          {paragraphs.map((paragraph, index) => (
            <BodyText key={paragraph.slice(0, 40)} lead={index === 0}>
              {paragraph}
            </BodyText>
          ))}
        </div>
      </Reveal>
    </EditorialLayout>
  );
}
