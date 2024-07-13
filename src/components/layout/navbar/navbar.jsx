"use client";
import Link from "next/link";
import React from "react";
import Navmenu from "./navmenu";
import NavLink from "./navlink";

const routes = [
  { title: "Home", href: "/" },
  { title: "About us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Locations", href: "/locations" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="absolute z-50 w-full p-6">
      <nav className="hidden w-full justify-around text-4xl lg:flex">
        {routes.map(({ title, href }, i) => (
          <NavLink key={i} title={title} href={href} />
        ))}
      </nav>
      <Navmenu routes={routes} />
    </div>
  );
};

export default Navbar;
