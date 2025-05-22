"use client";
import { deleteButton, updateButton } from "@/Services/ButtonService";
import { useRef } from "react";
import { IoCheckmarkDoneSharp, IoTrashSharp } from "react-icons/io5";
import { toast } from "sonner";

export type TButtonProps = {
  button: {
    id?: string;
    label: string;
    link: string;
  };
};

const ButtonCard = ({ button }: TButtonProps) => {
  const { id, label, link } = button;
  const labelRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const handleUpdate = async () => {
    if (!labelRef || !linkRef) return toast.error("Invalid updated data");

    const label = labelRef?.current?.value;
    const link = linkRef?.current?.value;

    const res = await updateButton(id!, {
      label,
      link,
    });

    if (res.success) {
      toast.success(res.message);
    }
  };

  const handleDelete = async () => {
    const res = await deleteButton(id!);
    if (res.success) {
      toast.success(res.message);
    }
  };

  return (
    <div className="flex size-full flex-col gap-5 md:flex-row md:items-center">
      <input
        ref={labelRef}
        defaultValue={label}
        type="text"
        name="label"
        placeholder="Input Button Label"
        className="flex-1 rounded-md border border-black/80 px-3 py-2 text-black/80 placeholder:text-black/40"
      />
      <input
        ref={linkRef}
        defaultValue={link}
        type="text"
        name="link"
        placeholder="Input Button Link"
        className="flex-1 rounded-md border border-black/80 px-3 py-2 text-black/80 placeholder:text-black/40"
      />
      <div className="flex items-center gap-5">
        <button
          onClick={handleUpdate}
          type="button"
          className="flex flex-1 cursor-pointer items-center justify-center rounded-md bg-black/80 px-5 py-2 text-center text-white backdrop-blur-xl"
        >
          <span className="flex items-center gap-2">
            <IoCheckmarkDoneSharp className="text-lg text-green-500" />
            <span>Update</span>
          </span>
        </button>
        <button
          onClick={handleDelete}
          type="button"
          className="flex flex-1 cursor-pointer items-center justify-center rounded-md bg-black/80 px-5 py-2 text-center text-white backdrop-blur-xl"
        >
          <span className="flex items-center gap-2">
            <IoTrashSharp className="text-lg text-red-400" />{" "}
            <span>Delete</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ButtonCard;
