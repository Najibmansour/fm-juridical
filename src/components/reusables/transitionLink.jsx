"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import { animate } from "framer-motion";
import { resolve } from "styled-jsx/css";

const TransitionLink = ({ children, href, wait = false, ...props }) => {
  const router = useRouter();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleTrans = async (e) => {
    e.preventDefault();
    await sleep(wait ? 500 : 0);
    animate("body", { filter: "blur(100px)", opacity: 0.1 }, { type: "decay" });
    await sleep(500);
    router.push(href);
    await sleep(500);
    animate("body", { filter: "blur(0px)", opacity: 1 }, { type: "decay" });
  };

  return (
    <Link href={href} {...props} onClick={handleTrans}>
      {children}
    </Link>
  );
};

export default TransitionLink;
