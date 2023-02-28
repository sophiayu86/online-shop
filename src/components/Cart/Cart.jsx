import React from "react";
import Product from "./Product";
import { useContext } from "react";
import { CartContext } from "CartContext";

function Cart() {
  const { initialArray, total } = useContext(CartContext);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {initialArray.map((product) => {
          return <Product key={product.id} product={product}></Product>;
        })}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">{total}</div>
      </section>
    </section>
  );
}

export default Cart;
