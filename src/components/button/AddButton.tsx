"use client";

import { createButton } from "@/Services/ButtonService";
import { useRouter } from "next/navigation";
import { IoAddSharp } from "react-icons/io5";
import { toast } from "sonner";

const AddButton = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const label = form.label.value;
    const link = form.link.value;
    try {
      const res = await createButton({ label, link });
      if (res.success) {
        toast.success(res.message);
        router.refresh();
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-black/80">Add Buttons</h2>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-4 md:flex-row md:items-center"
      >
        <input
          type="text"
          name="label"
          placeholder="Input button label"
          className="rounded-md border border-black px-3 py-2 text-black/90 placeholder:text-black/50 md:w-96"
        />
        <input
          type="text"
          name="link"
          placeholder="Input button link"
          className="rounded-md border border-black px-3 py-2 text-black/90 placeholder:text-black/50 md:w-96"
        />
        <button
          type="submit"
          className="flex cursor-pointer items-center justify-center gap-1 rounded-md bg-black/80 px-5 py-2 text-white"
        >
          <IoAddSharp className="text-lg" />
          <span className="font-medium text-white">Add button</span>
        </button>
      </form>
    </div>
  );
};

export default AddButton;
