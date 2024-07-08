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
          <Link
            key={title}
            href={href}
            className="hover:text-[#C59D3D] hover:underline underline-offset-8 transition-all"
          >
            {title}
          </Link>
        ))}
      </nav>
      <Navmenu routes={routes} />
    </div>
  );
};

export default Navbar;
