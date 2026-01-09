import { NavLink } from "react-router-dom";
import "./Header.css";
import "../index.css";
import hamburger from "../assets/shared/hamburger.png";
import { useState } from "react";
import close from "../assets/shared/icon-close.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false); // false - menu is closed
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Desktop header (only when mobile-menu is closed) if the menu is closed then show this*/}
      {!open && (
        <>
          {/* <p className="header-brand">Nivara</p> */}
          <NavLink to="/homePage" className="header-brand">
            Nivara
          </NavLink>

          <div className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-list-item">
                <NavLink to="/rooms" className="header-nav-item">
                  Rooms
                </NavLink>
              </li>
              <li className="header-nav-list-item">
                <NavLink to="/activities" className="header-nav-item">
                  Activities
                </NavLink>
              </li>
              <li className="header-nav-list-item">
                <NavLink to="/wellness" className="header-nav-item">
                  Wellness
                </NavLink>
              </li>
              <li className="header-nav-list-item">
                <NavLink to="/blog" className="header-nav-item">
                  Blog
                </NavLink>
              </li>
              <li className="header-nav-list-item">
                <NavLink to="/contact" className="header-nav-item">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              className="header-cta"
              onClick={() => {
                // setOpen(false);
                navigate("/booking");
              }}
            >
              Reserve your stay
            </button>
          </div>
        </>
      )}

      {/* Hamburger icon (only when mobile-menu is closed) */}
      {!open && (
        <img
          src={hamburger}
          alt="menu"
          className="hamburger"
          onClick={() => setOpen(true)}
        />
      )}

      {/* Mobile menu (only when open) if the menu is opened which is true show this*/}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <p className="header-brand-mobile-menu">Nivara</p>
            <img
              src={close}
              alt="close icon"
              onClick={() => setOpen(false)}
              className="close-icon"
            />
          </div>

          <div className="mobile-menu-content">
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">
                <NavLink to="/rooms" className="header-nav-item">
                  Rooms
                </NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink to="/activities" className="header-nav-item">
                  Activities
                </NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink to="/wellness" className="header-nav-item">
                  Wellness
                </NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink to="/blog" className="header-nav-item">
                  Blog
                </NavLink>
              </li>
              <li className="mobile-menu-item">
                <NavLink to="/contact" className="header-nav-item">
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              className="header-cta"
              onClick={() => {
                setOpen(false);
                navigate("/booking");
              }}
            >
              Reserve your stay
            </button>

            {/* <button className="header-cta">Reserve your stay</button> */}
          </div>
        </div>
      )}
    </header>
  );
}
