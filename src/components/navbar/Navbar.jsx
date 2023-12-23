import { navLinks } from "../../constants";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="header">Inance</div>
        <ul className="nav-links">
          {navLinks.map((navlink) => (
            <li key={navlink.id} className="nav-link">
              <a href={`#${navlink.id}`}>{navlink.title}</a>
            </li>
          ))}
        </ul>
        <div className="menu" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : menu} alt="close" />
          <div className={toggle ? "show" : "hide"}>
            <div className="sub-menu">
              <ul className="sub-list">
                {navLinks.map((navlink) => (
                  <li key={navlink.id} className="links">
                    <a href={`#${navlink.id}`}>{navlink.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
