import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [onSearch, setOnSearch] = useState(false);
  const [onHover, setOnHover] = useState<string | null>(null);

  const menu = ["home", "pages", "product", "blog", "contact us"];

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") setOnSearch(false);
    });
  }, []);
  return (
    <div className="relative z-[999]">
      <div className="container flex justify-between items-center py-3">
        <Link href="/" className="w-14">
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1684114116/ndent_qiuwfu.png"
            alt=""
          />
        </Link>
        <div className="flex items-center gap-10">
          <ul className={styles.menuList}>
            {menu.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setOnHover(item)}
                  onMouseLeave={() => setOnHover(null)}
                >
                  <li
                    key={index}
                    className="hover:text-primary transition-all flex gap-2"
                  >
                    <p>{item.toUpperCase()}</p>
                    <i className="ri-arrow-down-s-line"></i>
                  </li>
                  {onHover && <SubMenu index={item} onHover={onHover} />}
                </div>
              );
            })}
          </ul>
          <div className="flex gap-3">
            <button
              className="outline-none"
              onClick={() => setOnSearch((prev) => !prev)}
            >
              <i className="ri-search-line cursor-pointer"></i>
            </button>
            <i className="ri-shopping-cart-line cursor-pointer"></i>
          </div>
        </div>
      </div>
      {onSearch && <Search />}
    </div>
  );
}

const Search = () => {
  return (
    <div className="fixed top-0 right-0 z-[100] w-[100vw] h-[100vh] backdrop-blur-sm">
      <div className="absolute w-[95vw] max-w-[400px] h-[100vh] bg-white right-0">
        <div className="border-b-[1px] p-3 w-full flex items-center">
          <i className="ri-search-line cursor-pointer"></i>
          <input className="input" type="text" />
        </div>
      </div>
    </div>
  );
};

interface SubMenuProps {
  index: string;
  onHover: string | null;
}
interface Options {
  label: string;
  link: string;
}
const SubMenu: FC<SubMenuProps> = ({ index, onHover }) => {
  const submenu: any = {
    home: <HomeMenu />,
    pages: <PagesMenu />,
    product: <ProductsMenu />,
    blog: <BlogsMenu />,
  };
  return (
    <div className={styles.submenu}>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${
          index === onHover ? "block" : "hidden"
        } min-w-[300px] shadow-sm flex flex-col bg-white`}
      >
        {submenu[`${onHover}`]}
      </motion.ul>
    </div>
  );
};

const HomeMenu = () => {
  const options = [
    {
      label: "Fashion 1",
      link: "#",
    },
    {
      label: "Fashion 2",
      link: "#",
    },
    {
      label: "Fashion 3",
      link: "#",
    },
    {
      label: "Electronics 1",
      link: "#",
    },
    {
      label: "Electronics 2",
      link: "#",
    },
    {
      label: "Electronics 3",
      link: "#",
    },
  ];
  return (
    <>
      {options.map((item, index) => {
        return (
          <li className={styles.options} key={index}>
            {item.label}
          </li>
        );
      })}
    </>
  );
};

const PagesMenu = () => {
  const options = [
    {
      label: "About Us",
      link: "#",
    },
    {
      label: "Contact Us",
      link: "#",
    },
    {
      label: "Login",
      link: "#",
    },
    {
      label: "Register",
      link: "#",
    },
    {
      label: "Terms and Conditions",
      link: "#",
    },
  ];
  return (
    <>
      {options.map((item, index) => {
        return (
          <li className={styles.options} key={index}>
            {item.label}
          </li>
        );
      })}
    </>
  );
};

const ProductsMenu = () => {
  const women = [
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
  ];
  const men = [
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
  ];
  const kids = [
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
  ];
  const accessories = [
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
    {
      label: "Test",
      link: "#",
    },
  ];
  return (
    <div className="bg-white p-4">
      <div className={styles.productDropdown}>
        <ul>
          <li>Women</li>
          {women.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Men</li>
          {men.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Kids</li>
          {kids.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Accessories</li>
          {accessories.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{item.label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="mt-4 flex gap-4">
        <DropdownCategory color="#ffe8a8" />
        <DropdownCategory color="#caf7fc" />
        <DropdownCategory color="#e7ffe0" />
      </div>
    </div>
  );
};
interface DropdownCategoryProps {
  color: string;
}
const DropdownCategory: FC<DropdownCategoryProps> = ({ color }) => {
  return <div style={{ background: color }} className="w-full h-[180px]"></div>;
};

const BlogsMenu = () => {
  const options = [
    {
      label: "Grids",
      link: "#",
    },
    {
      label: "Masonry",
      link: "#",
    },
    {
      label: "Single Post",
      link: "#",
    },
    {
      label: "List",
      link: "#",
    },
  ];
  return (
    <>
      {options.map((item, index) => {
        return (
          <li className={styles.options} key={index}>
            {item.label}
          </li>
        );
      })}
    </>
  );
};
