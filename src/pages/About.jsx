import React from "react";
import fig1 from "../assets/images/pexels-photo-3985062.jpeg";
function About() {
  return (
    <>
      <div className="home_wrapper">
        <div className="home_contain">
          <p>Welcome to</p>
          <h1>Khan Ecommerce</h1>
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

      
    </>
  );
}

export default About;
