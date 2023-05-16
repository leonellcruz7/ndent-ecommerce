import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function Navbar() {
  const menu = ["home", "pages", "product", "blog", "shop", "contact us"];
  return (
    <div>
      <div className="container flex justify-between items-center py-3">
        <div className="w-14">
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/dyecs1c3j/image/upload/v1684114116/ndent_qiuwfu.png"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <ul className={styles.menuList}>
            {menu.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.toUpperCase()}</p>
                </li>
              );
            })}
          </ul>
          <i className="ri-search-line cursor-pointer"></i>
          <i className="ri-shopping-cart-line cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
