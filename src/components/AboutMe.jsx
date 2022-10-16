import { motion } from "framer-motion";
import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <div className="aboutme-text-container">
        <div className="about">
          <div>
            <h2 className="normalize-large-text">
              <motion.span
                className="gradiant-effect-for-text2 normalize-larger-text "
                animate={{ x: [200, 0] }}
                transition={{ easeOut: "ease", duration: 2 }}
              >
                A
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.4 }}
              >
                c
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.5 }}
              >
                e
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.6 }}
              >
                r
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.7 }}
              >
                c
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.8 }}
              >
                a
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 0.9 }}
              >
                {" "}
                d
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 1 }}
              >
                e
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 1.1 }}
              >
                {" "}
                m
              </motion.span>
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ easeOut: "ease", duration: 1.2 }}
              >
                i
              </motion.span>
              {"{"}
            </h2>

            <motion.p
              className="p-aboutme"
              animate={{ opacity: [0, 1] }}
              transition={{ easeOut: "ease", duration: 2 }}
            >
              Soy un desarrollador full-stack con{" "}
              <span className="gradiant-effect-for-text2 normalize-medium-text">
                +1 año
              </span>{" "}
              de experiencia, amo el desarrollo web y aprender día a día más
              <ul className="row t-r">
                <li className="">
                  <i className="fa-brands fa-github"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                </li>
              </ul>
            </motion.p>
            <h2 className="normalize-large-text">{"}"}</h2>
          </div>
          <img
            className="img-about normal-filer"
            src="https://i.postimg.cc/63wc0HDm/java-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
