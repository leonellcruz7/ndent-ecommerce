import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import { SizesProps } from "@/types";
import Size from "./Size";

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

export default Sizes;
