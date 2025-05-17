import LoginForm from "@/components/ui/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA - Admin Login",
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-2 md:px-0">
      <div className="rounded-3xl border-2 border-black/70 p-8 shadow-xl md:p-10">
        <h3 className="mb-5 text-3xl font-bold text-black/80">
          CPA Admin Login
        </h3>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
