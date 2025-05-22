"use client";

import { Button } from "@/components/ui/button";
import { removeToken } from "@/Services/AuthService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await removeToken("token");
    router.push("/");
    toast.success("Log out successful");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      className="cursor-pointer text-red-600"
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
