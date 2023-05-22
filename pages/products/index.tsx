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
import { getAllProducts, getCategories } from "@/requests/products";
import { CategoriesProps, ProductArray, ShopProps } from "../../types";
import { capitalizeWords } from "@/utils/helpers";

const Shop: FC<ShopProps> = ({ data }) => {
  const { products, categories } = data;
  console.log(categories);

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
        <Products categories={categories} products={products} />
      </div>
    </Layout>
  );
};

export default Shop;

const Products: FC<ProductArray> = ({ categories, products }) => {
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
          <ProductGrid categories={categories} products={products} />
        </div>
      </div>
      <div
        className={cn(
          styles.categoryContainer,
          "flex flex-col gap-8 lg:order-1"
        )}
      >
        <Categories categories={categories} />
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

const Categories: FC<CategoriesProps> = ({ categories }) => {
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
                <p>{capitalizeWords(item)}</p>
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
  const categories = await getCategories();

  return {
    props: {
      data: {
        products,
        categories,
      },
    },
    revalidate: 10,
  };
};
