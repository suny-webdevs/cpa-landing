"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in...");

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data?.success && data?.data?.token) {
        toast.success(data?.message, { id: toastId });
        router.push("/dashboard");
      } else {
        toast.error(data?.message || "Login failed", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="rounded-md border border-black px-3 py-2 text-black/90 placeholder:text-black/50 md:w-96"
        type="text"
        name="email"
        placeholder="Input email"
      />
      <input
        className="rounded-md border border-black px-3 py-2 text-black/90 placeholder:text-black/50 md:w-96"
        type="password"
        name="password"
        placeholder="Input password"
      />
      <button
        className="cursor-pointer rounded-md bg-black/80 py-2 text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
