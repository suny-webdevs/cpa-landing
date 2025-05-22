import { getButtons } from "@/Services/ButtonService";
import { TButton } from "@/types";

const getLink = async (linkLabel: string) => {
  const data = await getButtons();
  const buttons = data?.data;
  const link = buttons?.filter(
    (button: TButton) => button.label === linkLabel,
  )[0]?.link;
  return link;
};

export default getLink;
