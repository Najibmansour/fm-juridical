import TransitionLink from "@/components/reusables/transitionLink";
import Link from "next/link";
import React from "react";

const NavLink = (props) => {
  return (
    <TransitionLink
      {...props}
      key={props.title}
      href={props.href}
      className="group pointer-events-auto relative"
    >
      <span className="cursor-pointer transition-all duration-300 hover:text-secondary">
        {props.title}
      </span>
      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-secondary duration-300 ease-out group-hover:w-full" />
    </TransitionLink>
  );
};

export default NavLink;
