import { decodeToken } from "@/utils/decodeToken";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "CPA | Admin Dashboard",
};

const DashboardPage = async () => {
  const tokenStore = await cookies();
  const token = tokenStore.get("token")?.value;

  if (!token) {
    redirect("/");
  }

  const email = decodeToken(token as string)?.email;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/user/${email}`,
    {
      headers: { Authorization: `${token}` },
    },
  );
  const userData = await res.json();
  const user = userData?.data;

  return (
    <div>
      <h1>This is DashboardPage Component</h1>
      <p>Name : {user?.name}</p>
      <p>Email : {user?.email}</p>
      <p>Role : {user?.role}</p>

      <button className="cursor-pointer">Logout</button>
    </div>
  );
};

export default DashboardPage;
