import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
interface ModalProps {
  children: ReactNode;
}
const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0 }}
      className="fixed flex items-center justify-center z-[99999] h-[100vh] w-[100vw] backdrop-blur-sm top-0"
      data-testid="container"
    >
      <div
        className="p-4 md:p-10 sm:min-w-[400px] bg-white shadow-md rounded-[15px]"
        data-testid="children"
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
