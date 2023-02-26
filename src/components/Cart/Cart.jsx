import React from "react";
import product1 from "img/product-1.jpg";
import product2 from "img/product-2.jpg";
import { useState } from "react";
import Product from "./Product";

const initialArray = [
  {
    id: "1",
    name: "破壞補丁修身牛仔褲",
    img: product1,
    price: 3999,
    quantity: 1,
  },
  {
    id: "2",
    name: "刷色直筒牛仔褲",
    img: product2,
    price: 1299,
    quantity: 1,
  },
];
let intitalTotal = 0;
initialArray.forEach((product) => {
  return (intitalTotal += product.price * product.quantity);
});
function Cart() {
  const [total, setTotal] = useState(intitalTotal);
  
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {initialArray.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              total={total}
              setTotal={setTotal}
            ></Product>
          );
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
