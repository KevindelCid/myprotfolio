import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { technologies } from "../utils";
import { Item } from "./Item";

const Skills = () => {
  const [items, setItems] = useState(technologies);
  return (
    <section id="skills" className="section-skills">
      <section className="tittle-skills">
        <div className="title-skills-container">
          <h2 className="normalize-large-text ">
            <small className="small-code gradiant-effect-for-text1 normalize-medium-text">
              kDelCid.{" "}
            </small>
            <span className="gradiant-effect-for-text2 normalize-larger-text ">
              H
            </span>
            abilidades {"(()=>{"}
          </h2>
        </div>
      </section>

      
      <div className="skills-container">
        {technologies.map((item) => (
          <Item
            key={item.id}
            className="skills-img-container"
            item={item}
          ></Item>
        ))}
      </div>
      <h2 className="normalize-large-text">{"});"}</h2>
    </section>
  );
};

export default Skills;
