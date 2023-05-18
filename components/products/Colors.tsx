import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function Colors() {
  const colors = ["red", "orange", "blue", "violet", "brown"];
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div>
      <p className={styles.categoryTitle}>Colors</p>
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
}
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
    >
      <div
        style={{ background: color }}
        className={classNames("w-4 h-4 rounded-[50%]")}
      ></div>
    </button>
  );
};
