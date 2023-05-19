import React, { FC, ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";
import classNames from "classnames";
import styles from "./layout.module.scss";
interface LayoutTypes {
  children: ReactNode;
}
const Layout: FC<LayoutTypes> = ({ children }) => {
  const { breadcrumbs } = useSelector((state: RootState) => state.breadcrumbs);

  return (
    <div>
      <div className="fixed w-full z-[999] bg-white shadow-sm">
        <Navbar />
      </div>
      <div className="pt-16">
        {breadcrumbs.length !== 0 && (
          <div className="h-20 w-full bg-slate-200 flex items-center">
            <ul
              className={classNames(
                "container flex justify-end gap-3 breadcrumbs",
                styles.breadcrumbs
              )}
            >
              {breadcrumbs.map((item, index) => {
                return (
                  <li key={index} className="text-sm flex gap-3 text-slate-500">
                    <Link href={item.link}>
                      <p className="hover:text-primary transition-all">
                        {item.label}
                      </p>
                    </Link>
                    <i className="ri-arrow-right-s-line"></i>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {children}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
