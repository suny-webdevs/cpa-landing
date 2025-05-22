import { getButtons } from "@/Services/ButtonService";
import ButtonCard from "../ui/ButtonCard";
import { TButton } from "@/types";

const ButtonList = async () => {
  const buttons = await getButtons();

  return (
    <div className="mt-5 size-full">
      {buttons.length === 0 ? (
        <div className="flex size-full items-center justify-center border-4 border-dashed border-black/50">
          <h1 className="text-3xl font-bold text-black/80">No buttons found</h1>
        </div>
      ) : (
        <div className="flex size-full flex-col items-stretch justify-center gap-10 md:gap-5">
          {buttons?.data?.map((button: TButton) => (
            <ButtonCard key={button.id} button={button} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonList;
