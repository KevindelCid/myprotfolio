import { Reorder } from "framer-motion";
import React, { useState } from "react";
import { technologies } from "../utils";
import { Item } from "./Item";

const Skills = () => {
  const [items, setItems] = useState(technologies);
  return (
    <section>
      <section className="tittle-skills">
        <div className="title-skills-container">
          <h2 className="normalize-large-text ">
            <small className="small-code gradiant-effect-for-text1 normalize-medium-text">
              deCid.
            </small>{" "}
            <span className="gradiant-effect-for-text2 normalize-larger-text ">
              H
            </span>
            abilidades {"(()=>{"}
          </h2>
        </div>
      </section>

      {/* <ul className="skills-container">
        {technologies.map((tech) => (
          <li className="skills-img-container">
            <img className="skills-img-skill" src={tech.png} alt="" />
            <p>
              <span className=" gradiant-effect-for-text1 normalize-medium-text">
                {tech.exp.substring(0, 2)}
              </span>
              {tech.exp.substring(2)}
            </p>
          </li>
        ))}
      </ul> */}

      <Reorder.Group
        className="skills-container"
        // axis="x"

        values={items}
        onReorder={setItems}
      >
        {items.map((item) => (
          <Item
            key={item.id}
            className="skills-img-container"
            item={item}
          ></Item>
        ))}
      </Reorder.Group>

      <h2 className="normalize-large-text">{"});"}</h2>
    </section>
  );
};

export default Skills;
