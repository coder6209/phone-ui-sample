"use client";

import {motion} from "framer-motion";

export default function Button({children, buttonClass, buttonOnClick}) {
  return (
    <motion.button whileTap={{scale:0.8}} transition={{duration: 0.11}} className={buttonClass} onClick={buttonOnClick}>
      {children}
    </motion.button>
  );
}
