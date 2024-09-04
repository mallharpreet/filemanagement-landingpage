import LampDemo from "../app/components/Hero";
import CenteredWithLogo from "../app/components/Footer";
import FrequentlyAskedQuestionsAccordion from "../app/components/Faq";
import ContactFormGridWithDetails from "../app/components/Contact";
import FeaturesWithStickyScroll from "../app/components/Feature";

export default function Home() {
  return (
    <div className="bg-[#020618]">
      <LampDemo />
      <FeaturesWithStickyScroll />
      <FrequentlyAskedQuestionsAccordion />
      <ContactFormGridWithDetails />
      <CenteredWithLogo />
    </div>
  );
}
