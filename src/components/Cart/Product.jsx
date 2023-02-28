import { ReactComponent as Minus } from "img/minus.svg";
import { ReactComponent as Plus } from "img/plus.svg";
import { useState, useContext } from "react";
import { CartContext } from "CartContext.js";

function Product({ product }) {
  const { setTotal, total } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  function handlePlus() {
    setQuantity(quantity + 1);
    setTotal(total + product.price);
  }
  function handleMinus() {
    if (quantity < 1) {
      return;
    } else {
      setQuantity(quantity - 1);
      setTotal(total - product.price);
    }
  }

  return (
    <div className="product-container col col-12">
      <img className="img-container" src={product.img} alt="product-1" />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <Minus className="product-action minus" onClick={handleMinus} />
            <span className="product-count">{quantity}</span>
            <Plus className="product-action plus" onClick={handlePlus} />
          </div>
        </div>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
