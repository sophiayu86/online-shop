import { createContext, useState } from "react";
import product1 from "img/product-1.jpg";
import product2 from "img/product-2.jpg";

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

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [total, setTotal] = useState(intitalTotal);
  return (
    <CartContext.Provider value={{ total, setTotal, initialArray }}>
      {children}
    </CartContext.Provider>
  );
};
