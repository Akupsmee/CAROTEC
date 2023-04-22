import React from "react";
import logo2 from "./assets/logo2.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/contextAPI";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo2} className="nav-logo" alt="" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Products
            </button>
          </li>
          <li>
            <button className="link-btn">
              Accessories
            </button>
          </li>
          <li>
            <button className="link-btn">
              About
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              Contact
            </button>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
