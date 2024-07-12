"use client";
import Link from "next/link";
import React from "react";
import Navmenu from "./navmenu";

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
        {routes.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            className="group pointer-events-auto relative"
          >
            <span className="cursor-pointer transition-all duration-300 hover:text-secondary">
              {title}
            </span>
            <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-secondary duration-300 ease-out group-hover:w-full" />
          </Link>
        ))}
      </nav>
      <Navmenu routes={routes} />
    </div>
  );
};

export default Navbar;
