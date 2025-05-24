export interface Product {
    fullDescription: string;
    imageUrl: string;
    productStock: any;
    productID: number;
    name: string;
    description: string;
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
  }