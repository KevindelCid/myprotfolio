import { motion } from "framer-motion";
import React from "react";

const NavBar = () => {
  return (
    <motion.nav animate={{ x: [100, 0] }}>
      <ul className="navbar">
        <li className="">
          <i className="fa-brands fa-github"></i>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>
        </li>
        <li>
          <i className="fa-solid fa-microchip"></i>
        </li>
        <li>
          <i className="fa-solid fa-brain"></i>
        </li>
        <li>
          <i className="fa-solid fa-house-user"></i>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
