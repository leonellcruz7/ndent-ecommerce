import Dropdown from "@/components/dropdown/Dropdown";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/products/ProductCard";
import React from "react";
import styles from "./styles.module.scss";

export default function Shop() {
  const showing = ["10", "25", "50"];
  const sort = [
    "Default Sorting",
    "Sort by popularity",
    "Sort by newness",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];
  return (
    <Layout>
      <div className="container py-10">
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
        <div className="flex flex-col gap-10">
          <Categories />
          <Filter />
        </div>
      </div>
    </Layout>
  );
}

const ProductGrid = () => {
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="grid  gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
    <div className={styles.categoryContainer}>
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

const Filter = () => {
  return (
    <div className={styles.categoryContainer}>
      <p className={styles.categoryTitle}>Filter</p>
      <div>
        <input type="range" className="w-full" min={0} max={1000} />
      </div>
    </div>
  );
};
