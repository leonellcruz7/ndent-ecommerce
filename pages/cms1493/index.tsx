import Image from "next/image";
import React, { FC, ReactNode, useEffect, useState } from "react";
import logo from "../../public/logo-1.png";
import { capitalizeWords } from "@/utils/helpers";
import Pagination from "@/components/pagination/Pagination";
import classNames from "classnames";
import { getAllProducts } from "@/requests/products";
import { ProductTypes } from "@/types";
import Toggle from "@/components/toggle/Toggle";
import Modal from "@/components/modal/Modal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  setProductAffiliateLink,
  setProductDescription,
  setProductName,
  setProductPrice,
  setProductcategory,
} from "@/redux/products";

export default function CMS() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState("all products");
  const [showAddProduct, setShowAddProduct] = useState(false);
  useEffect(() => {
    getAllProducts()
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="bg-slate-100 min-h-[100vh]">
        <Nav />
        <div className="container flex py-10">
          <SidePanel setTab={setTab} tab={tab} />
          <div className="px-4 w-full flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">{capitalizeWords(tab)}</p>
              <button
                className="button primary-button"
                onClick={() => setShowAddProduct(true)}
              >
                Add Product
              </button>
            </div>
            <Table products={products} />
          </div>
        </div>
      </div>
      {showAddProduct && <AddProduct setShowProduct={setShowAddProduct} />}
    </>
  );
}
interface TableProps {
  products: ProductTypes[];
}

const AddProduct: FC<{ setShowProduct: any }> = ({ setShowProduct }) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state: RootState) => state.products);
  const {
    name,
    category,
    price,
    affiliate_Link,
    sizes,
    image_one,
    image_two,
    image_three,
    colors,
    description,
  } = product;
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setShowProduct(false);
      }
    });
  }, []);
  return (
    <Modal>
      <p className="text-lg font-semibold">Add Product</p>
      <div className="mt-2 flex flex-col gap-2 max-h-[800px] overflow-y-scroll hideScroll">
        <div className="flex flex-col gap-2">
          <input
            value={name}
            onChange={(e) => dispatch(setProductName(e.target.value))}
            type="text"
            className="input withBorder"
            placeholder="Product Name"
          />
          <div className="flex gap-2">
            <input
              value={category}
              onChange={(e) => dispatch(setProductcategory(e.target.value))}
              type="text"
              className="input withBorder"
              placeholder="Category"
            />
            <input
              value={price}
              onChange={(e) => dispatch(setProductPrice(e.target.value))}
              type="text"
              className="input withBorder"
              placeholder="Price"
            />
          </div>
          <input
            value={affiliate_Link}
            onChange={(e) => dispatch(setProductAffiliateLink(e.target.value))}
            type="text"
            className="input withBorder"
            placeholder="Affiliate Link"
          />
          <textarea
            value={description}
            onChange={(e) => dispatch(setProductDescription(e.target.value))}
            className="input withBorder min-h-[100px]"
            placeholder="Description"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-[1px] rounded-[10px] p-2">
            <p className="text-sm text-body font-medium">Images</p>
            <div className="w-[316px] h-[130px] flex mt-1">
              <div className="border-[2px] w-full p-2 gap-2 flex rounded-[10px] border-dashed">
                {image_one ? <ImageContainer /> : <ImageUpload />}
                {image_two ? <ImageContainer /> : <ImageUpload />}
                {image_three ? <ImageContainer /> : <ImageUpload />}
              </div>
            </div>
          </div>
          <div>
            <AddSize />
            <AddColor />
          </div>
        </div>
      </div>
      <div className="divider horizontal my-5"></div>
      <div className="flex justify-end">
        <button
          className="button text-sm text-body"
          onClick={() => setShowProduct(false)}
        >
          Cancel
        </button>
        <button className="button primary-button">Add Product</button>
      </div>
    </Modal>
  );
};

const AddColor = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [color, setColor] = useState("");
  const handleAddColor = () => {
    if (!colors.includes(color)) {
      setColors((prev) => [...prev, color]);
    }
  };
  return (
    <div>
      <div className="h-10 flex items-center gap-1">
        <p className="text-sm">Colors:</p>
        <div className="flex gap-2">
          {colors.map((item, index) => {
            return <Color setColors={setColors} color={item} key={index} />;
          })}
        </div>
      </div>
      <div className="flex">
        <input
          value={color}
          onChange={(e) => setColor(e.target.value)}
          type="color"
          className="input withBorder max-w-[60px]"
        />
        <button className="button dark-button" onClick={handleAddColor}>
          Add
        </button>
      </div>
    </div>
  );
};

const Color: FC<{ color: string; setColors: any }> = ({ color, setColors }) => {
  const handleRemoveColor = () => {
    setColors((prev: string[]) => prev.filter((item) => color !== item));
  };
  return (
    <button
      onClick={handleRemoveColor}
      className="w-4 h-4 rounded-[50%] flex items-center justify-center shadow-md bg-slate-200"
    >
      <div
        className="w-3 h-3 rounded-[50%]"
        style={{ background: `${color}` }}
      ></div>
    </button>
  );
};

const AddSize = () => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [size, setSize] = useState("");
  const handleAddSize = (e: any) => {
    e.preventDefault();
    if (!sizes.includes(size) && sizes.length < 6) {
      setSizes((prev) => [...prev, size]);
      setSize("");
    }
  };
  const handleRemove = (item: string) => {
    setSizes((prev) => prev.filter((size) => size !== item));
  };
  return (
    <div>
      <div className="flex items-center gap-1 h-10">
        <p className="text-sm">Sizes:</p>
        {sizes.map((item, index) => {
          return (
            <Size
              onClick={handleRemove.bind(null, item)}
              key={index}
              size={item}
            />
          );
        })}
      </div>
      <form className="flex">
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          type="text"
          className="input withBorder"
        />
        <button onClick={handleAddSize} className="button dark-button w-[90px]">
          Add
        </button>
      </form>
    </div>
  );
};
interface SizeProps {
  size: string;
  onClick: any;
}
const Size: FC<SizeProps> = ({ size, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-fit px-[5px] h-7 border-[2px] text-darkGrey border-lightGrey flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all`}
    >
      <p className="text-sm truncate">{size.toUpperCase()}</p>
    </button>
  );
};

const ImageUpload = () => {
  const [file, setFile] = useState<File>();
  const handleUpload = (file: File) => {
    console.log(file);
  };
  return (
    <div className="w-[100px] h-full rounded-[5px] overflow-hidden border-[2px] flex items-center justify-center relative">
      <i className="ri-add-box-line text-[30px] text-slate-300"></i>
      <input
        onChange={(e: any) => handleUpload(e.target.files[0])}
        type="file"
        className="absolute w-full h-full opacity-0"
      />
    </div>
  );
};

const ImageContainer = () => {
  return (
    <button className="w-[100px] h-full rounded-[5px]">
      <Image
        width={400}
        height={400}
        alt=""
        src="https://picsum.photos/200/200"
        className="rounded-[5px] h-full"
      />
    </button>
  );
};
const Table: FC<TableProps> = ({ products }) => {
  const headers = ["name", "category", "link", "active", "actions"];
  return (
    <div className="table">
      <div className="flex flex-col gap-10 min-h-[500px] justify-between">
        <table className="w-full">
          <thead>
            <tr className="">
              {headers.map((item, index) => {
                return <th key={index}>{capitalizeWords(item)}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>Sample</td>
                  <td>
                    <Toggle status={false} />
                  </td>
                  <td className="flex w-full justify-end gap-1">
                    <button>
                      <i className="ri-pencil-fill"></i>
                    </button>
                    <button>
                      <i className="ri-delete-bin-6-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mx-auto">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
interface SidePanelProps {
  tab: string;
  setTab: any;
}
const SidePanel: FC<SidePanelProps> = ({ tab, setTab }) => {
  const tabs = ["all products", "featured products"];
  return (
    <div className="w-[250px] border-r-[1px] min-h-[500px]">
      <ul className="">
        <li>Products</li>
        <ul className="ml-2 flex flex-col mt-2">
          {tabs.map((item, index) => {
            return (
              <button
                key={index}
                className={classNames(
                  "text-left p-2",
                  tab === item && "bg-slate-200"
                )}
                onClick={() => setTab(item)}
              >
                <li
                  className={classNames(
                    "text-sm hover:text-primary transition-all text-body",
                    tab === item && "text-primary font-medium"
                  )}
                >
                  {capitalizeWords(item)}
                </li>
              </button>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

const Nav = () => {
  const menu = ["products", ""];
  return (
    <div className="shadow-md py-2 bg-white">
      <div className="container">
        <Link href="/">
          <Image src={logo} width={400} height={400} alt="" className="w-10" />
        </Link>
      </div>
    </div>
  );
};
