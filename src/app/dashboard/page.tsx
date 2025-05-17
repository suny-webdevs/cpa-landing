import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const DashboardPage = async () => {
  const token = Cookies.get("token");
  if (!token) {
    return redirect("/");
  }

  return (
    <div>
      <h1>This is DashboardPage Component</h1>
    </div>
  );
};

export default DashboardPage;
