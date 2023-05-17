import React, { FC, ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";
interface LayoutTypes {
  children: ReactNode;
}
const Layout: FC<LayoutTypes> = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div>
      <div className="fixed w-full z-[999] bg-white shadow-sm">
        <Navbar />
      </div>
      <div className="pt-16">
        {router.pathname !== "/" && (
          <div className="h-20 w-full bg-slate-200"></div>
        )}
        {children}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
