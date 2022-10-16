import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Item } from "./Item";
import { technologies } from "../utils";

const Header = () => {
  const [items, setItems] = useState(technologies);

  return (
    <header className="header-container">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>

      {/* <section className="name-container"> */}
      <div className="header1">
        <motion.img
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="img-profile"
          src="https://i.postimg.cc/yxs5rmbL/kdcf.png"
          alt=""
        />
        <div className="header-content">
          <motion.h3
            animate={{ y: [-1000, 10, 0], x: [-1000, 10, 0] }}
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            ¡Hola, soy
          </motion.h3>
          <motion.h1
            className="gradiant-effect-for-text1"
            animate={{ y: [-1000, 10, 0], x: [-1000, 10, 0] }}
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            Kevin
          </motion.h1>

          <motion.h2
            className="gradiant-effect-for-text2"
            animate={{ x: [-1000, 10, 0], y: [1000, 10, 0] }}
            transition={{ easeOut: "ease", duration: 0.7 }}
          >
            del Cid
          </motion.h2>
          <motion.h3>y soy un fanático del código! :D</motion.h3>

          <motion.button
            className="btn btn-contact primary-gradiant"
            animate={{ scale: [5, 1], x: [200, 0] }}
          >
            ¡Contáctame!
          </motion.button>
          <section className="qualities-container">
            <ul className="option">
              <li>
                Cv es
                <div className="options-cv">
                  <i className="fa-solid fa-download"></i>
                  <i className="fa-solid fa-eye"></i>
                </div>
              </li>
              <li>
                <li>
                  Cv en
                  <div className="options-cv">
                    <i className="fa-solid fa-download"></i>
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </li>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* </section> */}

      {/* <Reorder.Group
        className="technologies"
        axis="x"
        values={items}
        onReorder={setItems}
      >
        {items.map((item) => (
          <Item key={item.id} className="technologi-card" item={item}></Item>
        ))}
      </Reorder.Group> */}
    </header>
  );
};

export default Header;
