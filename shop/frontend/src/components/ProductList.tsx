import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import Product from "../models/Product";
import { getProducts } from "../services/productService";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response: Product[] = await getProducts();
      console.log(response);
      setProducts(response);
    })();
  }, []);

  return (
    <ul className="ProductList">
      {products.map((item) => (
        <ProductCard product={item} key={item._id} />
      ))}
    </ul>
  );
};

export default ProductList;
