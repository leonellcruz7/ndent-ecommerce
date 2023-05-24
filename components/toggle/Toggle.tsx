import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const Toggle: FC<{ status: boolean }> = ({ status }) => {
  const [toggle, setToggle] = useState(status);

  const toggleVariant = {
    true: {
      x: 13.5,
    },
    false: {
      x: 0,
    },
  };
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <button
      onClick={handleToggle}
      className={classNames(
        "flex px-[2px] w-[30px] h-[17px] rounded-[30px] relative transition-all",
        toggle ? "bg-primary" : "bg-[#e1e1e1]"
      )}
    >
      <motion.div
        animate={toggle.toString()}
        variants={toggleVariant}
        transition={{ bounce: 0 }}
        className="bg-white w-[13px] h-[13px] top-[2px] rounded-[50%] absolute"
      ></motion.div>
    </button>
  );
};

export default Toggle;
