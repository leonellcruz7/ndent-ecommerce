import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

interface DropdownProps {
  id: string;
  options: string[];
  placeholder: string;
}
const Dropdown: FC<DropdownProps> = ({ id, options, placeholder }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (i: string) => {
    setSelected(i);
    setIsOpen(false);
  };
  useEffect(() => {
    const element = document.getElementById(id);
    document.addEventListener("click", (e: any) => {
      if (!element?.contains(e.target)) {
        setIsOpen(false);
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <div id={id} className="relative z-10" data-testid="container">
      <div
        onClick={() => setIsOpen(true)}
        className="h-10 bg-white border-[1px] border-[#cbd5de] cursor-pointer flex items-center px-3"
        data-testid="dropdown"
      >
        <input
          placeholder={placeholder}
          className="truncate pr-4 text-darkGrey text-sm outline-none cursor-pointer w-full"
          type="text"
          readOnly
          value={selected}
        />
        <i className="ri-arrow-down-s-line absolute right-2 top-2"></i>
      </div>

      <ul
        className={classNames(
          "py-4 shadow-sm min-h-10 w-full absolute bg-white mt-4",
          isOpen ? "block" : "hidden"
        )}
        data-testid="menu"
      >
        {options.map((item, index) => {
          return (
            <li
              onClick={handleSelect.bind(null, item)}
              className="text-sm cursor-pointer p-2 hover:bg-lightGrey transition-all"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
