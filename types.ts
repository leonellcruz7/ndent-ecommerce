import Product from "./pages/products/[productId]";

export interface Product {
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
    categories: string[];
  };
}

export interface ShopProps {
  data: {
    products: Product[];
    categories: string[];
  };
}

export interface HeroSectionProps {
  products: Product[];
}

export interface OurProductsProps {
  products: Product[];
  categories: string[];
}

export interface ProductArray {
  products: Product[];
  categories: string[];
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

export interface CategoriesProps {
  categories: string[];
}
