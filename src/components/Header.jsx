import React, { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { Item } from "./Item";

const Header = () => {
  const technologies = [
    {
      id: 1,

      category: "lib",
      name: "ReactJs",
      png: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      description: "libreria para JavaScript",
    },
    {
      id: 2,
      category: "len",
      name: "JavaScript",
      png: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      description: "Lenguaje de programación",
    },
    {
      id: 3,
      category: "framework",
      name: "Laravel",
      png: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png",
      description: "Framework para backend con PHP",
    },
    {
      id: 4,
      category: "len",
      name: "PHP",
      png: "https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png",
      description: "Lenguaje de programación",
    },
    {
      id: 5,
      category: "maq",
      name: "HTML5",
      png: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      description: "lenguaje de maquetado",
    },
    {
      id: 6,
      category: "style",
      name: "CSS3",
      png: "https://danielcastillo.dev/assets/img/skills/css.png",
      description: "Cascade Style Sheet",
    },
    {
      id: 7,
      category: "db",
      name: "MySQL",
      png: "https://pngimg.com/uploads/mysql/mysql_PNG35.png",
      description: "Base de datos relacional",
    },
  ];
  const [items, setItems] = useState(technologies);

  return (
    <header className="header-container">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div>
        <section className="name-container">
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
        </section>
      </div>
      <section>
        <Reorder.Group
          className="technologies"
          axis="x"
          values={items}
          onReorder={setItems}
        >
          {items.map((item) => (
            <Item key={item.id} className="technologi-card" item={item}></Item>
          ))}
        </Reorder.Group>
      </section>
    </header>
  );
};

export default Header;
