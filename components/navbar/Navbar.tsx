import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { capitalizeWords } from "@/utils/helpers";
import { searchProduct } from "@/requests/products";
import { ProductArray, ProductCardProps } from "@/types";

export default function Navbar() {
  const [onSearch, setOnSearch] = useState(false);
  const [onHover, setOnHover] = useState<string | null>(null);

  const menu = [
    {
      label: "home",
      link: "/",
    },
    {
      label: "product",
      link: "/products",
    },
    {
      label: "blog",
      link: "#",
    },
    {
      label: "contact us",
      link: "/contact-us",
    },
  ];

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
        <div className="flex gap-3">
          <DesktopMenu onHover={onHover} setOnHover={setOnHover} menu={menu} />
          <button className="md:hidden">
            <i className="ri-menu-4-line"></i>
          </button>
          <div className="flex gap-3">
            <button
              className="outline-none"
              onClick={() => setOnSearch((prev: boolean) => !prev)}
            >
              <i className="ri-search-line cursor-pointer"></i>
            </button>
            <i className="ri-shopping-cart-line cursor-pointer"></i>
          </div>
        </div>
      </div>
      {onSearch && <Search setOnSearch={setOnSearch} />}
    </div>
  );
}
interface MenuProps {
  menu: { label: string; link: string }[];
  onHover: string | null;
  setOnHover: any;
}
const DesktopMenu: FC<MenuProps> = ({ menu, onHover, setOnHover }) => {
  return (
    <div className="flex items-center gap-10">
      <ul className={styles.menuList}>
        {menu.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className="relative"
              onMouseEnter={() => setOnHover(item.label)}
              onMouseLeave={() => setOnHover(null)}
            >
              <li
                key={index}
                className="hover:text-primary transition-all flex gap-2"
              >
                <p>{item.label.toUpperCase()}</p>
                <i className="ri-arrow-down-s-line"></i>
              </li>
              {onHover && <SubMenu index={item.label} onHover={onHover} />}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

interface SearchProps {
  setOnSearch: any;
}
const Search: FC<SearchProps> = ({ setOnSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof Element) {
        const classList = target.classList;
        classList[0] === "outsideSearch" && setOnSearch(false);
      }
    });
  }, []);
  useEffect(() => {
    const search = setTimeout(() => {
      searchProduct(searchValue)
        .then((result) => setSearchResult(result))
        .catch((err) => console.log(err));
    }, 300);
    return () => {
      clearTimeout(search);
    };
  }, [searchValue]);
  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0 }}
      className="outsideSearch overflow-y-scroll hideScroll fixed top-0 right-0 z-[100] w-[100vw] min-h-[100vh] backdrop-blur-sm"
    >
      <div className="absolute w-[80vw] max-w-[400px] min-h-[100vh] bg-white right-0">
        <div className="border-b-[1px] p-3 w-full flex items-center">
          <i className="ri-search-line cursor-pointer"></i>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="input"
            type="text"
          />
        </div>
        <div className="p-4  flex flex-col gap-2">
          {searchResult.map((item, index) => {
            return <ResultCard details={item} key={index} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

const ResultCard: FC<ProductCardProps> = ({ details }) => {
  const { images, name, price, category, _id } = details;
  return (
    <Link href={`/products/${_id}`}>
      {" "}
      <button className="flex gap-4 hover:bg-slate-50 hover:shadow-sm hover:scale-[1.01] transition-all p-2">
        <div className="w-[40%]">
          <Image
            src={images[0]}
            width={400}
            height={400}
            alt=""
            className="rounded-[5px]"
          />
        </div>
        <div className="w-[60%] text-left text-sm">
          <p className="truncate text-primary font-medium">{name}</p>
          <p className="text-body">${price.toString()}</p>
          <p className="text-body text-[12px]">
            Category:{" "}
            <span className="text-darkGrey font-medium">
              {capitalizeWords(category)}
            </span>
          </p>
        </div>
      </button>
    </Link>
  );
};

interface SubMenuProps {
  index: string;
  onHover: string | null;
}

const SubMenu: FC<SubMenuProps> = ({ index, onHover }) => {
  const submenu: any = {
    home: <HomeMenu />,
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

const ProductsMenu = () => {
  const women = [
    {
      label: "berry extinct",
      link: "#",
    },
    {
      label: "coffee aid",
      link: "#",
    },
    {
      label: "football",
      link: "#",
    },
    {
      label: "client",
      link: "#",
    },
  ];
  const men = [
    {
      label: "inspector",
      link: "#",
    },
    {
      label: "worker",
      link: "#",
    },
    {
      label: "debt",
      link: "#",
    },
    {
      label: "sympathy",
      link: "#",
    },
  ];
  const kids = [
    {
      label: "freedom",
      link: "#",
    },
    {
      label: "manufacturer",
      link: "#",
    },
    {
      label: "blood",
      link: "#",
    },
    {
      label: "procedure",
      link: "#",
    },
  ];
  const accessories = [
    {
      label: "foundation",
      link: "#",
    },
    {
      label: "guest",
      link: "#",
    },
    {
      label: "loss",
      link: "#",
    },
    {
      label: "depression",
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
                <li>{capitalizeWords(item.label)}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Men</li>
          {men.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{capitalizeWords(item.label)}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Kids</li>
          {kids.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{capitalizeWords(item.label)}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li>Accessories</li>
          {accessories.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <li>{capitalizeWords(item.label)}</li>
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
