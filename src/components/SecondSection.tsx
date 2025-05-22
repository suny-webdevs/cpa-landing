import Image from "next/image";
import phone from "../../public/s3-phone.png";
import money from "../../public/s3-money.png";
import Link from "next/link";
import getLink from "@/utils/getLink";

const SecondSection = async () => {
  const linkOne = await getLink("Link 1");

  return (
    <div className="relative flex min-h-screen w-full max-w-screen flex-col items-center justify-center gap-10 overflow-hidden bg-[#e3ffc3] px-2 text-center md:px-0 lg:px-0">
      <div className="top-50% absolute left-0 z-0 hidden -translate-x-[30rem] transform lg:block">
        <Image src={phone} alt="phone" height={700} />
      </div>
      <h1 className="z-10 text-5xl text-black">
        How fast can I get my Reward?
      </h1>
      <p className="z-10 text-xl tracking-wide text-black">
        You can typically complete all of the required sponsored Deals within
        5-7 days <br className="hidden md:block" /> (some may take up to 60 days
        to complete). Once you complete the required{" "}
        <br className="hidden md:block" /> number of Deals, you must complete
        the Reward claims process, which requires ID{" "}
        <br className="hidden md:block" /> verification. It typically takes our
        customer service team 5-7 days to verify and{" "}
        <br className="hidden md:block" /> deliver your Reward.
      </p>
      <p className="z-10 text-xl tracking-wide text-black">
        Want to track your progress? Sign up for SMS alerts to keep you up to
        date on your <br className="hidden md:block" /> Reward status and Deal
        credits.
      </p>
      <Link href={`${linkOne}`}>
        <button
          type="button"
          className="cursor-pointer rounded-full bg-blue-500 px-10 py-4 text-3xl text-white"
        >
          Get a Quick Start
        </button>
      </Link>
      <div className="top-50% absolute right-0 z-0 hidden translate-x-[30rem] transform lg:block">
        <Image src={money} alt="money" height={700} />
      </div>
    </div>
  );
};

export default SecondSection;
