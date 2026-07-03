import { Reveal } from "@/components/motion/Reveal";
import { BodyText, EditorialLayout, QuoteHighlight } from "./shared";

const paragraphs = [
  "InvisiEdge was created from a simple insight: many businesses have strong ideas, great services, and real potential — but lack the digital strategy, branding, and execution needed to grow consistently.",
  "We saw that brands often struggle because their marketing efforts are scattered. Their website says one thing, their social media says another, and their lead generation has no clear system.",
  "InvisiEdge was built to solve that problem.",
  "We bring everything together — brand, content, website, SEO, automation, and growth strategy — into one connected system. We work quietly, strategically, and consistently behind the scenes so our clients can lead with confidence.",
];

export default function AboutBrandStorySection() {
  return (
    <EditorialLayout label="Brand Story" variant="lavender">
      <Reveal>
        <div className="flex flex-col gap-7 md:gap-9">
          {paragraphs.map((paragraph, index) => (
            <BodyText key={paragraph.slice(0, 40)} lead={index === 0}>
              {paragraph}
            </BodyText>
          ))}
          <QuoteHighlight>
            We are the invisible edge behind brands that grow.
          </QuoteHighlight>
        </div>
      </Reveal>
    </EditorialLayout>
  );
}
