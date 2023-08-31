import Product from "../models/Product";
import "./ProductCard.css";
import comingSoon from "../images/coming-soon.jpg";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <li className="ProductCard">
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
      {product.photoURL ? <img src="" /> : <img src={comingSoon} />}
    </li>
  );
};

export default ProductCard;
