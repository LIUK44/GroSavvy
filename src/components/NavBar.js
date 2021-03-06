import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NavBar() {
  const currentLocation = useLocation();

  const currentPath =
    currentLocation.pathname === "/"
      ? "home"
      : currentLocation.pathname.slice(1);

  const pathes = ["Home", "Shopping List", "Price Match", "My Lists"];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {pathes.map((path, i) => {
            return (
              <li
                key={i}
                className={
                  currentPath === path.replace(/\s+/g, "").toLowerCase()
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link
                  className="nav-link"
                  to={path.replace(/\s+/g, "").toLowerCase()}
                >
                  {path}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
