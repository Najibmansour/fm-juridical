"use client";
import React from "react";
import { motion } from "framer-motion";

const Transition = ({ className, children }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 20,
        opacity: 0,
        transition: { ease: "easeInOut", duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
