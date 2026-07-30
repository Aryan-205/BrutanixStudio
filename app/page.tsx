import { Hero } from "@/components/site/hero";
import { ValueProp } from "@/components/site/value-prop";
import { Services } from "@/components/site/services";
import { Work } from "@/components/site/work";
import { Milestones } from "@/components/site/milestones";
import { Founder } from "@/components/site/founder";
import { Testimonials } from "@/components/site/testimonials";
import { SiteFooter } from "@/components/site/site-footer";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <Work />
        <Milestones />
        <Founder />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
