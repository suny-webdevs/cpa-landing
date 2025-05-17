import Image from "next/image";
import box from "../../public/subscription.svg";
import Footer from "./shared/Footer";

const ForthSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 bg-green-100 px-2 text-center md:px-0">
      <div className="mb-2">
        <Image src={box} alt="box icon" width={200} />
      </div>
      <h1 className="text-5xl font-bold text-slate-800">
        We&apos;ve got Deals you will love!
      </h1>
      <p className="text-xl text-slate-800">
        Discover our partner Deals such as mobile games and apps,{" "}
        <br className="hidden lg:block" /> subscription products and services,
        free trials and many more! <br className="hidden lg:block" /> Complete
        the required number of Deals to earn your Reward.{" "}
        <br className="hidden lg:block" /> Many of our partner Deals require
        payments for products
        <br className="hidden lg:block" /> and services rendered.
      </p>
      <button
        type="button"
        className="cursor-pointer rounded-full bg-blue-500 px-10 py-4 text-xl font-semibold text-white"
      >
        Get a Quick Start
      </button>
      <Footer />
    </div>
  );
};

export default ForthSection;
