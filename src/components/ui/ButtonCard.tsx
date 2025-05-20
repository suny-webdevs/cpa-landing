import { IoCheckmarkDoneSharp, IoTrashSharp } from "react-icons/io5";

export type TButtonProps = {
  button: {
    id: string;
    label: string;
    link: string;
  };
};

const ButtonCard = ({ button }: TButtonProps) => {
  const { label, link } = button;
  return (
    <div className="flex items-center gap-5">
      <input
        defaultValue={label}
        type="text"
        name="label"
        placeholder="Input Button Label"
        className="rounded-md border border-black/80 px-2 py-1 text-black/80 placeholder:text-black/40"
      />
      <input
        defaultValue={link}
        type="text"
        name="link"
        placeholder="Input Button Link"
        className="rounded-md border border-black/80 px-2 py-1 text-black/80 placeholder:text-black/40"
      />
      <button
        type="button"
        className="cursor-pointer rounded-md bg-black/80 p-2 backdrop-blur-xl"
      >
        <IoCheckmarkDoneSharp className="text-lg text-green-500" />
      </button>
      <button
        type="button"
        className="cursor-pointer rounded-md bg-black/80 p-2 backdrop-blur-xl"
      >
        <IoTrashSharp className="text-lg text-red-400" />
      </button>
    </div>
  );
};

export default ButtonCard;
