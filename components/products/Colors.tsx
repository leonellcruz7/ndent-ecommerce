import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { ColorsProps } from "@/types";

const Colors: FC<ColorsProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div data-testid="container">
      <p className="categoryTitle">Colors</p>
      <div className="flex gap-2">
        {colors.map((item, index) => {
          return (
            <Color
              selected={selectedColor}
              setSelected={setSelectedColor}
              key={index}
              color={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
interface ColorProps {
  color: string;
  selected: string;
  setSelected: any;
}
const Color: FC<ColorProps> = ({ selected, setSelected, color }) => {
  return (
    <button
      className={(color === selected && styles.selectedColor) || ""}
      onClick={() => setSelected(color)}
      data-testid="button-container"
    >
      <div
        style={{ background: color }}
        className={classNames("w-4 h-4 rounded-[50%]")}
        data-testid="button"
      ></div>
    </button>
  );
};
