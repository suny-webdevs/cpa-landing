import { decodeToken } from "@/utils/decodeToken";
import { cookies } from "next/headers";

const DashboardPage = async () => {
  const tokenStore = await cookies();
  const token = tokenStore.get("token")?.value;
  const email = decodeToken(token as string)?.email;

  const res = await fetch(`${process.env.NEXT_API_URL}/auth/user/${email}`, {
    headers: { Authorization: `${token}` },
  });
  const userData = await res.json();
  const user = userData?.data;

  return (
    <div>
      <h1>This is DashboardPage Component</h1>
      <p>Name : {user?.name}</p>
      <p>Email : {user?.email}</p>
      <p>Role : {user?.role}</p>
    </div>
  );
};

export default DashboardPage;
