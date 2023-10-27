/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import SidebarMobile from "../Sidebar/SidebarMobile";

const Nav = ({handlechange, handleChange}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your shoe search..."
          className="search-input"
          onChange={handleChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>

      {toggle ? <SidebarMobile handlechange={handlechange} /> : <div className="ht"/>}

      <img
        src={toggle ? close : menu}
        alt={menu}
        className="menu-img"
        onClick={() => setToggle((prev) => !prev)}
      />
    </nav>
  );
};

export default Nav;
