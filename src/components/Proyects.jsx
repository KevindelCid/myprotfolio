import React from "react";
import { motion } from "framer-motion";
import { proyects } from "../utils";
const Proyects = () => {
  return (
    <section id="proyects" className="section-skills">
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

          <p className="p-container">
            <a href={proyect.link} target="_blank"><h3 className="proyect-title small-code gradiant-effect-for-text1 normalize-medium-text">
              {proyect.name}
            </h3></a>
            {proyect.description}

            <div className="tech-proyect-container">
              {proyect.technologies.map((tech) => (
                <motion.img 
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
                className="tech-proyect" src={tech.png} alt="" />
              ))}
            </div>
            <a target="_blank" href={proyect.repo}>
           <i className="fa-brands fa-github"></i>
        </a>
          </p>
        </motion.div>
      ))}
      <small className="comment">
        // Puedes ver todos mis proyectos en mi{" "}
        <a target="_blank" href="https://github.com/KevindelCid">
          GitHub <i className=" normalize-small-text  fa-brands fa-github"></i>
        </a>{" "}
      </small>

      <h2 className="normalize-large-text">{"];"}</h2>
    </section>
  );
};

export default Proyects;
