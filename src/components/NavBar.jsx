import { motion } from "framer-motion";
import React from "react";

const NavBar = () => {
  return (
    <motion.nav animate={{ x: [100, 0] }}>
      <ul className="navbar">
        <li className="">
          <a target="_blank" href="https://github.com/KevindelCid">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/kevindelcidf/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
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
        {/* 

        <li>
          <i className="fa-solid fa-download"></i>es
        </li>
        <li>
          <i className="fa-solid fa-download"></i>en
        </li> */}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
