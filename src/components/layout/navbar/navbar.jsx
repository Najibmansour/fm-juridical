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
    <div className="w-full absolute p-6 z-50">
      <nav className="lg:flex hidden text-4xl w-full justify-around">
        {routes.map(({ title, href }) => (
          <Link key={title} href={href} className="relative group ">
            <span className="cursor-pointer transition-all duration-300 hover:text-secondary">
              {title}
            </span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-secondary  duration-300 ease-out group-hover:w-full -translate-x-1/2" />
          </Link>
        ))}
      </nav>
      <Navmenu routes={routes} />
    </div>
  );
};

export default Navbar;
