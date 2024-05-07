import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Header() {
  const [baar, setbaar] = useState(false);
  const [cartLength, setCartlength] = useState();
  console.log(cartLength);
  function handleclick() {
    setbaar(!baar);
  }

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartlength(storedCartData.length);
  }, []);
  return (
    <>
      <header>
        <div className="Company_name">
          <div className={"khan"}>
            <h1>KHAN Bazaar</h1>
          </div>
        </div>
        <nav>
          <ul className={baar ? "main_list" : "manuuu"}>
            <NavLink
              to={"/"}
              className={"nav_link"}
              onClick={() => setbaar(!baar)}
            >
              Home{" "}
            </NavLink>
            <NavLink
              to={"/about"}
              className={"nav_link"}
              onClick={() => setbaar(!baar)}
            >
              About
            </NavLink>
            <NavLink
              to={"/product"}
              className={"nav_link"}
              onClick={() => setbaar(!baar)}
            >
              Product
            </NavLink>
            <NavLink
              to={"/contact"}
              className={"nav_link"}
              onClick={() => setbaar(!baar)}
            >
              Contact
            </NavLink>
            <div className="nav_button">
              <button> Log In</button>
            </div>
          </ul>
          <div className="nav_icon" onClick={handleclick}>
            {!baar ? (
              <GiHamburgerMenu className="hamberger" />
            ) : (
              <ImCross className="hamberger" />
            )}
          </div>
          <div className="cart">
            <NavLink to={"/cart"}>
              <FaShoppingCart />
            </NavLink>
            <span>{cartLength}</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
