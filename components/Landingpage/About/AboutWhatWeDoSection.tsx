import { Reveal } from "@/components/motion/Reveal";
import { BodyText, EditorialLayout } from "./shared";

const paragraphs = [
  "InvisiEdge is a digital marketing and growth agency built for modern businesses that need more than disconnected marketing activities.",
  "We bring together strategy, branding, website development, SEO, content, AI, automation, and lead generation to help brands grow with clarity and consistency.",
  "We work behind the scenes as a strategic extension of your team, helping your brand show up stronger, communicate better, and convert more effectively.",
];

export default function AboutWhatWeDoSection() {
  return (
    <EditorialLayout label="What We Do">
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
