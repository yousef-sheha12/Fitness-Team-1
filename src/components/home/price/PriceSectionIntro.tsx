import SectionHighlight from "@/components/common/SectionHighlight";
import HeaderH2 from "../HeaderH2";
import HeaderP from "../HeaderP";

export default function PriceSectionIntro() {
  return (
    <>
      <SectionHighlight text="Packages" />
      <HeaderH2 text="Simple, " highlight="Transparent Pricing" />
      <HeaderP textAlign="center" className="text-zinc-300">
        Choose the plan that fits your goals. No hidden fees, no contracts.
        Cancel anytime.
      </HeaderP>
    </>
  );
}
