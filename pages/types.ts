interface Product {
  id: string;
  name: string;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  isAvailable: boolean;
  date_created: Date;
  price: Number;
}

export interface ProductCardProps {
  details: Product;
}

export interface HomeProps {
  data: {
    products: Product[];
  };
}

export interface ProductArray {
  products: Product[];
}
