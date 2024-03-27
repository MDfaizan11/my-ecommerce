import React from "react";
import fig1 from "../assets/images/pexels-photo-3985062.jpeg";
import { FiCodesandbox } from "react-icons/fi";
import "../style/home.css";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import FeatureProduct from "../component/featureProduct/FeatureProduct";
function Home() {
  return (
    <>
      <div className="home_wrapper">
        <div className="home_contain">
          <p>Welcome to</p>
          <h1>Khan Bazaar</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
            cumque suscipit porro a voluptatum sunt natus obcaecati blanditiis
            consequuntur, velit possimus temporibus doloremque quaerat magni
            fuga corrupti atque iure, expedita accusamus. Incidunt veritatis,
            perferendis quas harum quam aliquam perspiciatis vitae deleniti ea
            dicta sapiente earum beatae quod exercitationem commodi laudantium.
          </p>
          <div>
            <button className="home_button"> Shop Now</button>
          </div>
        </div>
        <div className="home_image">
          <img src={fig1} alt="" />
        </div>
      </div>
      <FeatureProduct />
      <div className="services_wrapper">
        <div className="services_1">
          <div className="truck_wrapper">
            <TbTruckDelivery />
          </div>
          <p>super Fast and Free Delivery</p>
        </div>
        <div className="services_2_wrapper">
          <div className="services_2">
            <div className="non_wrapper">
              <FiCodesandbox />
            </div>
            <p> Non - contact shipping</p>
          </div>
          <div className="services_2">
            <div className="non_wrapper">
              <GiReceiveMoney />
            </div>
            <p>Money - back Gauranteed</p>
          </div>
        </div>
        <div className="services_1">
          <div className="truck_wrapper">
            <RiSecurePaymentFill />
          </div>
          <p>super Fast and Free Delivery</p>
        </div>
      </div>
    </>
  );
}

export default Home;
