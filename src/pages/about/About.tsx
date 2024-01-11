import React, { Fragment, useState, useRef } from "react";
import styles from "./About.module.scss";
import { aboutPhoto } from "../../assets/assetPath";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { aboutData } from "../../util/Content";
import { wrap } from "popmotion";
import { aboutVariants } from "../../util/FramerVariants";
import {
  swipeConfidenceThreshold,
  swipePower,
} from "../../util/FramerVariants";

const About = () => {
  const ref = useRef(null);
  const [[page, direction], setPage] = useState([0, 0]);
  const isInView = useInView(ref, { once: true });

  const imageIndex = wrap(0, aboutData.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section ref={ref} id="about" className={styles.about}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.about_img}
      >
        <img src={aboutPhoto} alt="Girl listening to music" />
      </div>

      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={styles.about_text}
      >
        <h2>WHAT WE DO</h2>
        <p>
          SwitchVibes is the simplest solution for seamless music playlist
          migration between different music streaming platforms. SwitchVibes is
          built to be dead simple, straightforward and efficient. Do away with
          manual playlist recreation and let SwitchVibes do the heavy lifting
          for you.
        </p>
        <h1>What Sets Us Apart?</h1>

        <div
          className={styles.about_text_div}
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            {aboutData &&
              aboutData.map((element, index) => (
                <motion.p
                  style={{ position: "absolute", maxWidth: "70%" }}
                  key={index}
                  custom={direction}
                  variants={aboutVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                >
                  {Object.values(aboutData[imageIndex]).map((el) => {
                    return (
                      <Fragment key={el}>
                        <span>
                          <strong
                            style={{
                              textDecoration: "underline",
                              width: "inherit",
                            }}
                          >
                            {el.substring(0, el.indexOf(":") + 1)}
                          </strong>
                        </span>{" "}
                        <br />
                        <span> {el.substring(el.indexOf(":") + 1)}</span>
                      </Fragment>
                    );
                  })}
                </motion.p>
              ))}
          </AnimatePresence>
          <div
            className={styles.about_text_div__next}
            style={{
              top: "calc(50% - 20px)",
              position: "absolute",
              background: "white",
              borderRadius: "30px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "30px",
              zIndex: 2,
              right: 0,
              color: "#707070",
            }}
            onClick={() => paginate(1)}
          >
            {"‣"}
          </div>
          <div
            className={styles.about_text_div__prev}
            style={{
              top: "calc(50% - 20px)",
              position: "absolute",
              background: "white",
              borderRadius: "30px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              userSelect: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "30px",
              zIndex: 2,
              left: 0,
              transform: " scale(-1)",
              color: "#707070",
            }}
            onClick={() => paginate(-1)}
          >
            {"‣"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
