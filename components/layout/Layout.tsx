import React, { FC, ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
interface LayoutTypes {
  children: ReactNode;
}
const Layout: FC<LayoutTypes> = ({ children }) => {
  return (
    <div>
      <div className="fixed w-full z-[999] bg-white shadow-sm">
        <Navbar />
      </div>
      <div className="pt-16">{children}</div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
