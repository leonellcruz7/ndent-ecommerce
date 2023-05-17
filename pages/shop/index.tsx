import Dropdown from "@/components/dropdown/Dropdown";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/products/ProductCard";
import React, { FC, useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
export default function Shop() {
  return (
    <Layout>
      <div className="container py-10">
        <Products />
      </div>
    </Layout>
  );
}

const Products = () => {
  const showing = ["10", "25", "50"];
  const sort = [
    "Default Sorting",
    "Sort by popularity",
    "Sort by newness",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="max-w-[1000px] lg:max-w-auto lg:order-2 mx-auto">
        <div className="flex justify-between gap-10">
          <div className="max-w-[350px] w-full">
            <Dropdown id="sort" options={sort} placeholder="Default Sorting" />
          </div>
          <div className="max-w-[140px]">
            <Dropdown id="showing" options={showing} placeholder="Showing" />
          </div>
        </div>
        <div className="mt-10">
          <ProductGrid />
        </div>
      </div>
      <div
        className={cn(
          styles.categoryContainer,
          "flex flex-col gap-8 lg:order-1"
        )}
      >
        <Categories />
        <div className="divider horizontal"></div>
        <Brand />
        <div className="divider horizontal"></div>
        <Sizes />
        <div className="divider horizontal"></div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center my-10 lg:justify-end">
        <Pagination />
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = [
    {
      category: "Women",
      count: 1,
    },
    {
      category: "Top",
      count: 2,
    },
    {
      category: "T-Shirts",
      count: 3,
    },
    {
      category: "Men",
      count: 4,
    },
    {
      category: "Shoes",
      count: 5,
    },
  ];
  return (
    <div>
      <p className={styles.categoryTitle}>Categories</p>
      <ul className="flex flex-col gap-2">
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer hover:text-primary text-sm flex justify-between items-center"
            >
              <div className="flex gap-3 items-center">
                <i className="ri-arrow-right-s-line"></i>
                <p>{item.category}</p>
              </div>
              <div className="text-center w-10">
                <p>({item.count})</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Brand = () => {
  const brands = [
    "New Arrivals",
    "Lighting",
    "Tables",
    "Chairs",
    "Accessories",
  ];
  return (
    <div>
      <p className={styles.categoryTitle}>Brand</p>
      <div className="flex flex-col gap-2">
        {brands.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-3 cursor-pointer">
              <input id={item} type="checkbox" />
              <label htmlFor={item} className="text-sm cursor-pointer">
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Sizes = () => {
  const sizes = ["xs", "s", "m", "l", "xl", "2xl"];
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <div>
      <p className={styles.categoryTitle}>Sizes</p>
      <div className="flex gap-1">
        {sizes.map((item, index) => {
          return (
            <Size
              selected={selectedSize}
              setSelected={setSelectedSize}
              size={item}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
interface SizeProps {
  size: string;
  selected: string;
  setSelected: any;
}
const Size: FC<SizeProps> = ({ size, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(size)}
      className={`w-8 h-8 border-[2px] text-darkGrey border-lightGrey flex items-center justify-center ${
        selected === size && "bg-primary text-white border-primary"
      }`}
    >
      <p className="text-sm">{size.toUpperCase()}</p>
    </button>
  );
};
