import Layout from "@/components/layout/Layout";
import Colors from "@/components/products/Colors";
import Sizes from "@/components/products/Sizes";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setBreadCrumbs } from "@/redux/breadcrumbs";
import { getAllProducts, getProductDetails } from "@/requests/products";
import {
  ImageListProps,
  ImageProps,
  ProductCardProps,
  ProductTypes,
} from "../../types";
import { capitalizeWords } from "@/utils/helpers";

const Product: FC<ProductCardProps> = ({ details }) => {
  const dispatch = useDispatch();
  const { _id, category, colors, images, isAvailable, name, sizes, price } =
    details;
  const [selectedImage, setSelectedImage] = useState(images[0]);

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
        {
          label: "Product Details",
          link: "/products/test",
        },
      ])
    );
  }, []);
  return (
    <Layout>
      <div className="container py-10">
        <div className="flex flex-col gap-12 lg:flex-row md:gap-10 mx-auto">
          <div className="lg:w-[40%] flex flex-col gap-2 relative h-fit">
            <div className="w-full max-h-[800px] rounded-[10px] flex justify-center items-center overflow-hidden p-1 shadow-md border-[1px]">
              <Image
                width={1000}
                height={1000}
                src={selectedImage}
                alt=""
                className="rounded-[5px]"
              />
            </div>
            <div className="absolute bottom-[-20px] right-[10px] flex justify-end">
              <ImageList
                selected={selectedImage}
                setSelected={setSelectedImage}
                images={images}
              />
            </div>
          </div>
          <div className="md:w-[60%]">
            <ProductDetails details={details} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

const ProductDetails: FC<ProductCardProps> = ({ details }) => {
  const {
    _id,
    category,
    colors,
    images,
    isAvailable,
    name,
    sizes,
    price,
    description,
  } = details;
  return (
    <div>
      <p className="text-lg font-medium">{name}</p>
      <p className="text-headline5 font-semibold text-primary">
        ${price.toString()}
      </p>
      {/* <div className="text-yellow-400">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-half-fill"></i>
      </div> */}
      <p
        className="text-body mt-4"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="divider horizontal my-4"></div>
      <div className="flex flex-col gap-6">
        <Sizes sizes={sizes} />
        {colors.length !== 0 && <Colors colors={colors} />}
        <div className="divider horizontal"></div>
        <AddtoCart />
        <div className="divider horizontal"></div>
        <Others category={category} />
      </div>
    </div>
  );
};

const ImageList: FC<ImageListProps> = ({ selected, setSelected, images }) => {
  return (
    <div className="flex gap-2">
      {images.map((item, index) => {
        return (
          <ImageItem
            selected={selected}
            setSelected={setSelected}
            key={index}
            image={item}
          />
        );
      })}
    </div>
  );
};

const ImageItem: FC<ImageProps> = ({ selected, setSelected, image }) => {
  return (
    <button
      onClick={() => setSelected(image)}
      className={`rounded-[50%] overflow-hidden p-1 hover:scale-[1.03] transition-all ${
        selected === image ? "scale-[1.05] bg-slate-600 shadow-md" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center w-16 h-16 rounded-[50%] overflow-hidden">
        <Image width={500} height={500} src={image} alt="" className="w-full" />
      </div>
    </button>
  );
};

const AddtoCart = () => {
  const [quantity, setQuantity] = useState(1);
  const handleDeduct = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <button onClick={handleDeduct} className={styles.quantityButton}>
          <i className="ri-subtract-line"></i>
        </button>
        <p className="text-lg font-semibold text-primary">{quantity}</p>
        <button onClick={handleAdd} className={styles.quantityButton}>
          <i className="ri-add-line"></i>
        </button>
      </div>
      <button className="button primary-button max-w-[180px] flex items-center gap-2 justify-center">
        <i className="ri-shopping-cart-line"></i> <p>Add To Cart</p>
      </button>
    </div>
  );
};

const Others: FC<{ category: string }> = ({ category }) => {
  const tags = [
    {
      label: "Cloth",
      link: "#",
    },
    {
      label: "Printed",
      link: "#",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="text-body font-light flex gap-2">
        <p>Category:</p>
        <Link href={`/products?category=${category}`}>
          <span className="font-medium">{capitalizeWords(category)}</span>
        </Link>
      </div>
      {/* <div className="text-body font-light flex gap-3 items-center">
        <p>Tags:</p>
        <div className="flex gap-2">
          {tags.map((item, index) => {
            return (
              <Link href="#" key={index}>
                <button className="font-medium text-sm py-1 px-2 bg-slate-200 text-slate-500">
                  {item.label}
                </button>
              </Link>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const result = await getAllProducts();
  const paths = result.map((item: ProductTypes) => ({
    params: { productId: item._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Context {
  params: {
    productId: string;
  };
}
export const getStaticProps = async (context: Context) => {
  const { productId } = context.params;
  console.log(productId);

  const result = await getProductDetails(productId);
  return {
    props: {
      details: result,
    },
  };
};
