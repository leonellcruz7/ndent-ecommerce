import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

export default function Pagination() {
  const [selectedPage, setSelectedPage] = useState(1);
  const totalProduct = 50;
  const showing = 10;
  const quotient = totalProduct / showing;
  const pages = [];
  for (let i = 1; quotient >= i; i++) {
    pages.push(i);
  }
  const handleNext = () => {
    if (selectedPage < quotient) {
      setSelectedPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (selectedPage > 1) {
      setSelectedPage((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="flex gap-1">
        {selectedPage > 1 && (
          <button className={styles.box} onClick={handlePrev}>
            <i className="ri-arrow-left-line"></i>
          </button>
        )}
        {pages.map((item, index) => {
          return (
            <Page
              setSelected={setSelectedPage}
              selected={selectedPage}
              count={item}
              key={index}
            />
          );
        })}
        {selectedPage !== quotient && (
          <button className={styles.box} onClick={handleNext}>
            <i className="ri-arrow-right-line"></i>
          </button>
        )}
      </div>
    </div>
  );
}
interface PageProps {
  count: number;
  selected: number;
  setSelected: any;
}
const Page: FC<PageProps> = ({ count, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(count)}
      className={selected === count ? styles.selectedBox : styles.box}
    >
      {count}
    </button>
  );
};
