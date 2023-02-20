import React from "react";
import product1 from "img/product-1.jpg";
import product2 from "img/product-2.jpg";
import { ReactComponent as Minus } from "img/minus.svg";
import { ReactComponent as Plus } from "img/plus.svg";
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

function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {initialArray.map((product) => {
          return (
            <div
              key={product.id}
              className="product-container col col-12"
              data-count="0"
              data-price="3999"
            >
              <img
                className="img-container"
                src={product.img}
                alt="product-1"
              />
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <Minus className="product-action minus" />
                    <span className="product-count">{product.quantity}</span>
                    <Plus className="product-action plus" />
                  </div>
                </div>
                <div className="price">${product.price}</div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">$5298</div>
      </section>
    </section>
  );
}

export default Cart;
