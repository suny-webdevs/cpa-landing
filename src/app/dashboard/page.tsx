import AddButton from "@/components/button/AddButton";
import ButtonCard from "@/components/ui/ButtonCard";
import { getCurrentUser } from "@/Services/AuthService";
import { getButtons } from "@/Services/ButtonService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA | Admin Dashboard",
};

const DashboardPage = async () => {
  const buttons = await getButtons();
  const user = await getCurrentUser();

  return (
    <div className="min-h-screen max-w-screen border-2 bg-white p-8 md:p-10">
      {/* Dash Nav */}
      <div className="flex items-center justify-between bg-black/80 px-4 py-3">
        <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        <div className="flex flex-col">
          <p className="text-white">{user?.data?.name}</p>
          <p className="text-white">{user?.data?.role}</p>
        </div>
      </div>
      {/* Add Button */}
      <div className="mt-10">
        <AddButton />
      </div>
      {/* Buttons */}
      <div className="mt-10 flex items-center gap-5">
        <h2 className="text-4xl font-bold text-black/80">Buttons</h2>
      </div>
      <div className="mt-10 flex h-96 flex-col gap-5">
        {buttons?.data?.map(
          (button: { id: string; label: string; link: string }) => (
            <ButtonCard key={button.id} button={button} />
          ),
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
