import { NavLink } from "react-router-dom";
import { Appcontext } from "../../context/Productcontex";
import { useContext } from "react";
import "./feature.css";
function FeatureProduct() {
  let product = useContext(Appcontext);
  return (
    <>
      <div className="heading">
        <p style={{ textAlign: "center" }}>
          {" "}
          <span style={{ color: "orange" }}> F</span>eature{" "}
          <span style={{ color: "orange" }}>P</span>roduct
        </p>
      </div>
      <div className="Single_Feature_wrapper">
        {product.data.map((e) => {
          if (e.featured === true)
            return (
              <div className="singlePagedesign" key={e.id}>
                <NavLink className="pp" to={`/singleproduct/${e.id}`}>
                  <div>
                    <div className="name">
                      <p>{e.name}</p>
                    </div>
                    <div className="image">
                      <img src={e.image} alt="" />
                    </div>
                    <div className="company">
                      <p> manufacture By : {e.company}</p>
                    </div>
                    <div className="price">
                      <p> Price : {e.price}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
        })}
      </div>
    </>
  );
}

export default FeatureProduct;
