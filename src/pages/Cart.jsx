import React, { useEffect, useState } from "react";

function Cart() {
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartData(storedCartData);
    // Calculate total amount when component mounts
    calculateTotalAmount(storedCartData);
  }, []);

  useEffect(() => {
    // Calculate total amount whenever cart data changes
    calculateTotalAmount(cartData);
    // Update local storage with updated cart data
    localStorage.setItem("cartItems", JSON.stringify(cartData));
  }, [cartData]);

  const calculateTotalAmount = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += (item.price || 0) * (item.quantity || 0);
    });
    setTotalAmount(total);
    // Store total amount in local storage
    localStorage.setItem("totalAmount", JSON.stringify(total));
  };

  function handleIncrement(id) {
    const updatedCartData = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  }

  function handleDecrement(id) {
    console.log(id);
    const updatedCartData = cartData.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(updatedCartData);
  }

  function handledelete(idx) {
    let deleteData = cartData.filter((item, index) => {
      return index !== idx;
    });
    setCartData(deleteData);
  }

  return (
    <>
      <p>Cart page</p>
      {cartData.length !== 0
        ? cartData.map((item, idx) => {
            return (
              <div key={idx}>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleIncrement(item.id)}>+</button>
                <span>{item.quantity || 0}</span>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <p>Item Total: ${item.price * (item.quantity || 0)}</p>
                <button onClick={() => handledelete(idx)}>
                  {" "}
                  delete product
                </button>
              </div>
            );
          })
        : "Your cart is empty"}
      <p>Total Amount: ${totalAmount}</p>
    </>
  );
}

export default Cart;
