import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-end gap-5 px-5 py-3 text-sm text-slate-800">
      <Link href={"/login"}>Admin login</Link>{" "}
      <p>
        Developed by{" "}
        <Link href={"https://suny-webdevs.vercel.app"}>Suny-WebDevs</Link>
      </p>
    </div>
  );
};

export default Footer;
