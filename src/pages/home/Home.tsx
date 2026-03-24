import Header from "@/components/home/Header";
import HowToUse from "@/components/home/howToUse/HowToUse";
import MeetTheExperts from "@/components/home/meetTheExperts/MeetTheExperts";
import PriceSection from "@/components/home/price/PriceSection";

export const Home = () => {
  return (
    <>
      <Header />
      <HowToUse />
      <MeetTheExperts />
      <PriceSection />
    </>
  );
};
