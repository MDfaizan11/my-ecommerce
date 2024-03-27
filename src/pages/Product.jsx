import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/Productcontex";
import { NavLink } from "react-router-dom";

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
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(searchData);
  }, [search, originalData]);

  return (
    <>
      <input
        value={search}
        type="search"
        placeholder="search product"
        onChange={handlesearch}
      />
      <p>Product page</p>
      <button onClick={() => setData(a)}> all data </button>
      <button onClick={() => handleclick("mobile")}> mobile</button>
      <button onClick={() => handleclick("laptop")}> laptop</button>
      <div>
        {data?.map((e, id) => {
          return (
            <div key={e.id}>
              <NavLink to={`/singleproduct/${e.id}`}>
                <p>{e.name}</p>
                {/* <button onClick={() => handlesubmit(id)}>add to cart</button> */}
              </NavLink>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
