import React from "react";
import { motion } from "framer-motion";
import { proyects } from "../utils";
const Proyects = () => {
  return (
    <section className="section-skills">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="aboutme-text-container"
      >
        <div className="title-skills-container">
          <h2 className="normalize-large-text ">
            <small className="small-code gradiant-effect-for-text1 normalize-medium-text">
              kDelCid.{" "}
            </small>
            <span className="gradiant-effect-for-text2 normalize-larger-text ">
              P
            </span>
            oyectos {"=["}
          </h2>
        </div>
      </motion.section>

      {proyects.map((proyect) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={
            proyect.id % 2 === 0
              ? "img-proyects-container"
              : "img-proyects-container2"
          }
        >
          <img className="img-proyect" src={proyect.image} alt="" />

          <p>
            <h3 className="small-code gradiant-effect-for-text1 normalize-medium-text">
              {proyect.name}
            </h3>
            {proyect.description}

            <div className="tech-proyect-container">
              {proyect.technologies.map((tech) => (
                <img className="tech-proyect" src={tech.png} alt="" />
              ))}
            </div>
          </p>
        </motion.div>
      ))}

      <h2 className="normalize-large-text">{"];"}</h2>

      <small className="comment">
        // Puedes ver todos mis proyectos en mi{" "}
        <a target="_blank" href="https://github.com/KevindelCid">
          GitHub <i className="fa-brands fa-github"></i>
        </a>{" "}
      </small>
    </section>
  );
};

export default Proyects;
