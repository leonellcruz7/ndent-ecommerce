import Dropdown from "@/components/dropdown/Dropdown";
import Layout from "@/components/layout/Layout";
import Pagination from "@/components/pagination/Pagination";
import ProductCard from "@/components/products/ProductCard";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import Sizes from "@/components/products/Sizes";
import { useDispatch } from "react-redux";
import { setBreadCrumbs } from "@/redux/breadcrumbs";
import { getAllProducts } from "@/requests/products";
import { ProductArray, ShopProps } from "../../types";

const Shop: FC<ShopProps> = ({ data }) => {
  const { products } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setBreadCrumbs([
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Products",
          link: "/products",
        },
      ])
    );
  }, []);
  return (
    <Layout>
      <div className="container py-10">
        <Products products={products} />
      </div>
    </Layout>
  );
};

export default Shop;

const Products: FC<ProductArray> = ({ products }) => {
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
          <ProductGrid products={products} />
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
        <Sizes sizes={["xs", "s", "m", "l", "xl", "2xl"]} />
        <div className="divider horizontal"></div>
      </div>
    </div>
  );
};

const ProductGrid: FC<ProductArray> = ({ products }) => {
  return (
    <div>
      <div className="grid gap-6 grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item, index) => {
          return <ProductCard key={index} details={item} />;
        })}
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
      <p className="categoryTitle">Categories</p>
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
      <p className="categoryTitle">Brand</p>
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

export const getStaticProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      data: {
        products,
      },
    },
    revalidate: 10,
  };
};
