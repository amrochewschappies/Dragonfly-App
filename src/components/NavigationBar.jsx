import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="header-container">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          id="Layer_1"
          width="100%"
          x="0"
          y="0"
          version="1.1"
          viewBox="340 100 300 300"
          className="logo"
        >
          <path d="M565.057 238.006c4.613-1.585 8.827-3.153 13.128-4.425 3.762-1.113 7.85-1.063 9.495 3.014 1.626 4.034-2.07 6.513-4.878 8.273-5.626 3.527-11.603 6.5-17.473 9.631-8.95 4.775-17.771 9.632-28.334 10.38-4.461.315-8.589-.371-12.81-1.116-2.646-.466-5.218-.6-7.823-.242-.463 3.066.038 5.17 3.049 6.214 2.452.851 3.84 3.014 3.694 5.445-.274 4.59 1.905 8.3 4.573 11.275 13.77 15.359 21.68 34.176 31.586 51.846 3.882 6.925 4.122 15.073 8.623 21.698 1.196 1.762-.457 3.856-2.558 4.695-3.397 1.356-6.409.617-8.174-2.62-1.661-3.048-2.874-6.353-4.142-9.6-4.496-11.51-11.68-21.654-16.634-32.942-4.42-10.071-10.7-19.115-16.338-28.514-1.844-3.074-3.745-5.738-7.17-7.285-4.532-2.048-5.276-6.876-6.688-10.849-2.617.02-2.644 1.788-3.094 3.11-4.44 13.044-11.746 23.144-25.536 27.983-8.739 3.067-16.769 8.084-26.133 9.589-1.974.317-3.9.868-5.912.67-3.471-.344-5.894-2.238-7.24-5.377s.352-5.454 2.452-7.529c3.386-3.345 6.575-6.905 11.626-9.883-17.51 2.204-33.848 4.006-50.324 1.877-1.313-.17-2.663-.277-3.914-.672-3.77-1.19-7.563-2.97-8.371-7.077-.725-3.683 2.738-5.675 5.213-7.867 5.738-5.084 13.171-5.781 19.993-8.25 22.72-8.218 46.492-9.242 70.114-11.461 2.275-.214 4.609.253 6.917.277.574.006 1.154-.481 1.85-1.066-5.098.235-9.231-.485-10.157-6.621-1.11-7.353-.25-11.035 3.875-13.261 4.33-2.337 11.516-.828 15.658 3.19 3.14 3.044 1.93 5.981-.117 9.197 6.677-1.538 10.67-6.38 14.382-11.256 12.429-16.327 25.223-32.233 42.707-43.612a58.7 58.7 0 0 0 10.019-8.215c2.934-3.005 6.81-4.689 11.078-5.317 4.805-.708 7.266 1.257 6.38 5.931-2.638 13.902-8.893 25.965-18.853 36.132-8.738 8.92-20.222 13.231-30.9 18.906-3.207 1.704-6.784 2.788-9.975 6.652 13.074-3.124 25.076-6.401 37.136-10.928"></path>
        </svg>
        <p id="logo-text">Dragonfly</p>
      </div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li>
            <Link to={"/"}>
              <span className="responsiveness-hide">1.</span> Home
            </Link>
          </li>
          <li>
            <Link to={"/events"}>
              <span className="responsiveness-hide">2.</span> Events
            </Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              <span className="responsiveness-hide">3.</span> Favourites
            </Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu-button" onClick={toggleMenu}>
        Menu
      </div>

      <div className={`menu-panel ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>
          ×
        </button>

        <ul>
          <p>(Navigation)</p>
          <li onClick={closeMenu}>
            <Link to={"/"}>
              {" "}
              Home <span>01</span>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to={"/events"}>
              Events <span>02</span>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to={"/favourites"}>
              Favourites <span>03</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
