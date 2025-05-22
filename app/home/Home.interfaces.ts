export interface Product {
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    category_id: number;
  }
  
  export interface Categorys {
    id: number;
    name: string;
    categoryID: number;
    description: string;
    active: boolean;
    image: string;
  }