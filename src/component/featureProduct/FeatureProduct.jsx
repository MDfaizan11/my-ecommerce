import { NavLink } from "react-router-dom";
import { Appcontext } from "../../context/Productcontex";
import { useContext } from "react";
import "./feature.css";
function FeatureProduct() {
  // const [feature, setfeatre] = useState([]);
  // console.log(feature);
  let product = useContext(Appcontext);
  // console.log(product);
  // let mainData = product.data;
  // console.log(mainData);

  // useEffect(() => {
  //   let filterProduct = mainData.filter((item) => {
  //     return item.featured === true;
  //   });
  //   console.log(filterProduct);
  //   setfeatre(filterProduct);
  // }, []);

  return (
    <>
      <p style={{ textAlign: "center" }}> FeatureProduct</p>
      <div className="Single_Feature_wrapper">
        {product.data.map((e) => {
          if (e.featured === true)
            return (
              <div className="singlePagedesign" key={e.id}>
                <NavLink to={`/singleproduct/${e.id}`}>
                  <div>
                    <p>{e.name}</p>
                    <img src={e.image} alt="" />
                    <p>{e.company}</p>
                    <p>{e.price}</p>
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
