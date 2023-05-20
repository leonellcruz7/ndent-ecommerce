import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import { SizesProps } from "@/pages/types";

const Sizes: FC<SizesProps> = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div>
      <p className="categoryTitle">Sizes</p>
      <div className="flex gap-1">
        {sizes.map((item, index) => {
          return (
            <Size
              selected={selectedSize}
              setSelected={setSelectedSize}
              size={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
interface SizeProps {
  size: string;
  selected: string;
  setSelected: any;
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
export default Sizes;
