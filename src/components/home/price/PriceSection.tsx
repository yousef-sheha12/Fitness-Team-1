import PricePackages from "./PricePackages";
import PriceSectionIntro from "./PriceSectionIntro";

export default function PriceSection() {
  const sectionBackgroundStyle = {
    backgroundColor: "var(--dark-mode-surfaces-bg-cards-bg-primary, #121212)",
    backgroundBlendMode: "overlay" as const,
    backgroundImage:
      "linear-gradient(180deg, rgba(255, 77, 77, 0.8) 0%, #838383 100%)",
  };

  return (
    <section
      style={sectionBackgroundStyle}
      className="w-full px-4 py-16 md:py-20"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <PriceSectionIntro />
        <PricePackages />
      </div>
    </section>
  );
}
