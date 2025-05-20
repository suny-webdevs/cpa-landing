import ForthSection from "@/components/ForthSection";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Home",
  description: "This is CPA marketing homepage",
};

export default function Home() {
  return (
    <div className="max-w-screen">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
    </div>
  );
}
