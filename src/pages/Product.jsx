import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Productcontex";
import { NavLink } from "react-router-dom";
import "../style/product.css";
function Product() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [search, setsearch] = useState("");

  console.log(originalData);
  console.log(data);
  let product = useContext(Appcontext);
  let a = product.data;

  useEffect(() => {
    if (a) {
      setData(a);
      setOriginalData(a);
    }
  }, [a]);

  function handleclick(category) {
    let fil = originalData.filter((item) => {
      return item.category === category;
    });
    setData(fil);
    console.log(fil);
  }

  function handlesearch(e) {
    setsearch(e.target.value);
  }

  useEffect(() => {
    let searchData = originalData.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(search.toLowerCase())
      );
    });
    setData(searchData);
  }, [search, originalData]);

  return (
    <>
      <div className="search_bar">
        <input
          value={search}
          type="search"
          placeholder="search product"
          onChange={handlesearch}
        />
      </div>

      <p className="product_title"> GET ALL PRODUCTS</p>
      <div className="category_button">
        <button onClick={() => setData(a)}> all data </button>
        <button onClick={() => handleclick("mobile")}> mobile</button>
        <button onClick={() => handleclick("laptop")}> laptop</button>
        <button onClick={() => handleclick("watch")}> Watch</button>
      </div>

      <div className="abc">
        {data?.map((e, id) => {
          return (
            <div key={e.id} id="product_design">
              <NavLink id="navlink" to={`/singleproduct/${e.id}`}>
                <img src={e.image} alt="" className="product_img" />
                <div className="specification">
                  <p>Name : {e.name}</p>
                  <p>Price : {e.price}</p>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
