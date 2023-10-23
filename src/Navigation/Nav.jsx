import { useState } from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import SidebarMobile from "../Sidebar/SidebarMobile";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your shoe search..."
          className="search-input"
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

      {toggle ? <SidebarMobile /> : <div className="ht"/>}

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
