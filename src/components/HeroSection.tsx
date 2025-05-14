import Image from "next/image";
import paypalCard from "./../../public/paypal-card.png";
import { FaCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/hero-banner.jpg')] bg-cover bg-center">
      <div className="relative flex min-h-screen flex-col items-center justify-center space-y-5 bg-gradient-to-b from-black/70 via-black/80 to-black/90 px-2 text-center md:px-0">
        <div className="absolute top-0 -left-5 flex -rotate-45 transform flex-col items-center gap-2 border-b-2 border-green-400 md:top-7 md:left-0">
          <FaCheckCircle className="text-xl text-green-400" />
          <p className="text-sm font-bold tracking-wide text-green-400 uppercase md:text-lg">
            Available
          </p>
        </div>
        <p className="text-xl md:text-2xl">Complete twenty Deals to claim</p>
        <h1 className="text-5xl font-bold md:text-7xl">$750 To Your PayPal</h1>
        <Image
          src={paypalCard}
          alt="Paypal card"
          width={700}
          className="my-8"
        />
        <p className="text-center">
          COMPLETE 25 DEALS TO CLAIM A $1000 REWARD OR
          <br className="hidden md:block" /> COMPLETE FEWER TO CLAIM LOWER VALUE
          REWARDS.
        </p>
        <p>UPON COMPLETION OF PURCHASE & PROGRAM REQUIREMENTS.</p>
      </div>
    </div>
  );
};

export default HeroSection;
