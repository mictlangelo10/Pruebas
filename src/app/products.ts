export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
}

export const products = [
  {
    id: 1,
    name: "Phone XL",
    price: 799,
    description: "Un gran teléfono",
    images: ["image1.jpg"],
  },
  {
    id: 2,
    name: "Phone Mini",
    price: 699,
    description: "Un bello teléfono",
    images: ["img2.jpg"],
  },
  {
    id: 3,
    name: "Phone Standard",
    price: 299,
    description: "Un teléfono para niñes bien",
    images: ["img3.jpg"],
  },
  {
    id: 4,
    name: "HG Phone",
    price: 200,
    description: "Una belleza de teléfono",
    images: ["img4.jpg"],
  },
  {
    id: 5,
    name: "DM Phone",
    price: 1200,
    description: "El mejor de todos",
    images: ["img5.jpg"],
  },
  {
    id: 6,
    name: "Phone SuperPro",
    price: 500,
    description: "Cálidad-Precio",
    images: ["img66.png"],
  },
];
