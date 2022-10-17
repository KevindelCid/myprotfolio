import { motion } from "framer-motion";
import React from "react";

const NavBar = () => {
  return (



    <motion.nav animate={{ x: [100, 0] }}>
           <motion.small 
        animate={{ opacity: [0, 1] }}
        transition={{ duration: .5 }}
      className="small-code gradiant-effect-for-text1 normalize-medium-text align-l">
         <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        
         className=" title-logo gradiant-effect-for-text2 normalize-small-text" >import</motion.span>{' { '}kDelCid{" }"}
         <motion.span 
           animate={{ opacity: [0, 1] }}
           transition={{ duration: 1.5 }}
         className="gradiant-effect-for-text2 normalize-small-text" > from </motion.span>
         'development-lovers';
            </motion.small>
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
        <a href="#skills"> <i className="fa-solid fa-brain"></i></a> 
        </li>
        <li>
         <a href="#proyects"><i className="fa-solid fa-microchip"></i></a> 
        </li>
        
        <li>
         <a href="#home"> <i className="fa-solid fa-house-user"></i></a>
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
