import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Productcontex";
import "../App.css";

function SingleProduct() {
  const [singleData, setSingleData] = useState([]);
  const data = useContext(Appcontext);
  const { id } = useParams();
  console.log(id);
  const [finaldata, setFinaldata] = useState([]);

  useEffect(() => {
    if (data.data) {
      setSingleData(data.data);
    }
  }, [data.data]);

  useEffect(() => {
    const mysingleData = singleData.filter((item) => item.id === id);
    setFinaldata(mysingleData);
  }, [id, singleData]);

  // function handlesubmit(id) {
  //   id = parseInt(id);
  //   console.log(id);
  //   const product = finaldata.find((item, index) => index === id);
  //   const existingCartItems =
  //     JSON.parse(localStorage.getItem("cartItems")) || [];
  //   const updatedCartItems = [...existingCartItems, product];
  //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  //   alert("Product added to cart!");
  // }

  function handlesubmit(idx) {
    idx = parseInt(idx);
    console.log(idx);
    const product = finaldata.find((item, index) => index === idx);
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    // Check if the product already exists in the cartItems
    const isProductInCart = existingCartItems.some(
      (item) => item.id === product.id
    );
    if (isProductInCart) {
      alert("This product is already in your cart!");
      return; // Stop further execution
    }
    // If the product is not in the cartItems, add it
    const updatedCartItems = [...existingCartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    alert("Product added to cart!");
  }

  return (
    <>
      <p> SingleProduct </p>
      {finaldata.map((item, id) => {
        const { name, image, company, price, description } = item;
        return (
          <div key={item.id} className="single_page_wrapper">
            <div className="image_container">
              <div className="image_div">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="discription_container">
              <p>{name}</p>
              <p>{`Brand Name : ${company}`}</p>
              <p>
                Deal of the day : $<del>{"85,000000"}</del>{" "}
              </p>
              <p>{`Price : ${price}`}</p>
              <p>{description}</p>
              <div className="cart_button">
                <button onClick={() => handlesubmit(id)}>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SingleProduct;
