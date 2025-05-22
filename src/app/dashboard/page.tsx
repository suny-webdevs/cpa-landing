import AddButton from "@/components/button/AddButton";
import { AdminDropdown } from "@/components/button/AdminDropdown";
import ButtonList from "@/components/button/ButtonList";

const DashboardPage = () => {
  return (
    <div className="min-h-screen max-w-screen border-2 bg-white p-8 md:p-10">
      {/* Dash Nav */}
      <div className="flex items-center justify-between bg-black/80 px-4 py-3">
        <h2 className="text-xl font-bold text-white">Admin Dashboard</h2>
        <AdminDropdown />
      </div>
      {/* Add Button */}
      <div className="mt-10">
        <AddButton />
      </div>
      {/* Buttons */}
      <div className="mt-10 flex items-center gap-5">
        <h2 className="text-4xl font-bold text-black/80">Buttons</h2>
      </div>
      <ButtonList />
    </div>
  );
};

export default DashboardPage;
