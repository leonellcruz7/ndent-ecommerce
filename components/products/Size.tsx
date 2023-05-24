import { SizesProps } from "@/types";
import React, { FC } from "react";
interface SizeProps {
  size: string;
  selected?: string;
  setSelected?: any;
}
const Size: FC<SizeProps> = ({ size, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(size)}
      className={`w-8 h-8 border-[2px] text-darkGrey border-lightGrey flex items-center justify-center ${
        selected === size && "bg-primary text-white border-primary"
      }`}
    >
      <p className="text-sm">{size.toUpperCase()}</p>
    </button>
  );
};

export default Size;
