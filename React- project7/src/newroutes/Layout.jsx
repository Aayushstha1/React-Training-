import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="bg-red-500 text-white flex p-4">
        <h1 className="">My store</h1>
        <ul className="flex gap-4 ml-auto">
          {/* {
          links.map(({name, path}) => (
          key={path}>))

          } */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              Products
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              Contact
            </NavLink>
            </li>
            <li>
          <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              Login
            </NavLink>
          </li>
            <li>
          <NavLink
              to="/CartPage"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-800" : ""
              }
            >
              Cart
            </NavLink>
            </li>
        
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
