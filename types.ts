import Product from "./pages/products/[productId]";

interface Product {
  _id: string;
  name: string;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  isAvailable: boolean;
  date_created: Date;
  price: Number;
  description: string;
}

export interface ProductTypes extends Product {}

export interface ProductCardProps {
  details: Product;
}

export interface HomeProps {
  data: {
    products: Product[];
  };
}

export interface ShopProps extends HomeProps {}

export interface ProductArray {
  products: Product[];
}

export interface ImageListProps {
  images: string[];
  setSelected: any;
  selected: string;
}

export interface ImageProps {
  image: string;
  setSelected: any;
  selected: string;
}
export interface SizesProps {
  sizes: string[];
}

export interface ColorsProps {
  colors: string[];
}
