import Image from "next/image";

import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setBreadCrumbs } from "@/redux/breadcrumbs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllProducts } from "@/requests/products";
import { HomeProps, ProductArray } from "./types";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};

const Home: FC<HomeProps> = ({ data }) => {
  const { products } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBreadCrumbs([]));
  }, []);
  return (
    <Layout>
      <HeroSection products={products} />
      <TopCategories />
      <OurProducts products={products} />
    </Layout>
  );
};

export default Home;

const HeroSection: FC<ProductArray> = ({ products }) => {
  // useEffect(() => {
  //   console.log(products);
  // }, []);
  return (
    <div className="min-h-[60vh] bg-lightGrey">
      <div className="container py-20 w-full">
        <Carousel
          showDots
          responsive={responsive}
          itemClass="px-2"
          containerClass="py-10"
          className="z-0"
        >
          {products.map((item, index) => {
            return (
              <div key={index} className="max-w-[500px]">
                <ProductCard details={item} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

const TopCategories = () => {
  const categories = [
    {
      name: "Television",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202466/kindpng_1755322_jczzar.png",
    },
    {
      name: "Mobile",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202550/iPhone-11-PNG-Transparent-HD-Photo_dpo9ew.png",
    },
    {
      name: "Headphones",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202599/16-black-headphones-png-image_wchdld.png",
    },
    {
      name: "Watch",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684202665/58863-series-watch-apple-smartwatch-strap-free-photo-png_ogxi4s.png",
    },
    {
      name: "Game",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217754/71b5c986-76fd-4182-b7de-31d3c8ad2234_instinct_base_shadow_xbox_series_x_controller_850x600_qyjqpw.webp",
    },
    {
      name: "Camera",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217806/DSLR-Camera-Transparent-Background_jk4dqs.png",
    },
    {
      name: "Audio",
      image:
        "https://res.cloudinary.com/dyecs1c3j/image/upload/v1684217991/wireless_speaker_PNG50_ci3wlm.png",
    },
  ];
  return (
    <div>
      <div className="container py-10">
        <div className="text-center flex flex-col gap-3">
          <p className="title">Top Categories</p>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex gap-10 overflow-scroll hideScroll">
            {categories.map((item, index) => {
              return <Category key={index} props={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryProps {
  props: {
    name: string;
    image: string;
  };
}

const Category: FC<CategoryProps> = ({ props }) => {
  const { image, name } = props;
  return (
    <Link href="#">
      <div className="h-[250px] flex flex-col items-center">
        <div className="flex items-center h-[300px]">
          <div className="flex w-[150px]">
            <Image
              className="w-full h-full"
              width={500}
              height={500}
              alt=""
              src={image}
            />
          </div>
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
};

const OurProducts: FC<ProductArray> = ({ products }) => {
  const [selectedMenu, setSelectedMenu] = useState("New Arrival");
  const menu = [
    {
      label: "New Arrival",
      link: "#",
    },
    {
      label: "Best Seller",
      link: "#",
    },
    {
      label: "Featured",
      link: "#",
    },
    {
      label: "Special Offer",
      link: "#",
    },
  ];
  return (
    <div className="bg-lightGrey py-10">
      <div className="container">
        <p className="title text-center">Our Products</p>
        <div className="mt-4">
          <div className="flex justify-center">
            <ul className="flex overflow-scroll gap-10 hideScroll">
              {menu.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedMenu(item.label)}
                  >
                    <li
                      className={`hover:text-primary transition-all truncate ${
                        selectedMenu === item.label &&
                        "text-primary scale-[1.04] font-medium"
                      }`}
                    >
                      {item.label}
                    </li>
                  </button>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 min-[470px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:mx-[50px]">
          {products.map((item, index) => {
            return <ProductCard key={index} details={item} />;
          })}
        </div>
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
  };
};
