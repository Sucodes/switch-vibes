import { useState } from "react";
import styles from "./Credits.module.scss";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { cardData } from "../../util/Content";
import { faqVariants } from "../../util/FramerVariants";

const Credits = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectId, setSelectId] = useState<number | null>(null);

  const icons = [
    <MdOutlineMailOutline />,
    <FaTwitter />,
    <FaLinkedinIn />,
    <FaGithub />,
  ];

  const cardFlip = (index: number) => {
    setSelectId(selectId === index ? null : index);
    if (!isAnimating) {
      setIsAnimating(true);
    }
  };

  return (
    <section id="credits" className={styles.credits}>
      <h1>Credits</h1>

      <div className={styles.credits_card} style={{}}>
        {cardData?.map((data, index) => {
          return (
            <motion.div
              key={index}
              onClick={() => cardFlip(index)}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              animate={{
                rotateY: selectId === index ? 180 : 360,
              }}
              transition={{
                duration: 0.6,
                animationDirection: "normal",
              }}
              style={{
                transformStyle: selectId === index ? "preserve-3d" : "inherit",
                perspective: selectId === index ? "300px" : "0",
              }}
              onAnimationComplete={() => setIsAnimating(false)}
              variants={faqVariants}
            >
              <div
                className={styles.credits_card__front}
                style={{
                  position: selectId === index ? "absolute" : "relative",
                  backfaceVisibility: selectId === index ? "hidden" : "inherit",
                }}
              >
                <img src={data.image} alt="profile img" />
                <div>
                  <h3>{data.title}</h3>
                  <p>{data.subTitle}</p>
                </div>
              </div>
              <div
                className={styles.credits_card__back}
                style={{
                  display: selectId === index ? "flex" : "none",
                  transform:
                    selectId === index
                      ? "perspective(300px) rotateY(180deg)"
                      : undefined,
                }}
              >
                <ul>
                  {data?.links?.map((element, index) => {
                    return (
                      <li key={index}>
                        <a href={element} target="_blank" rel="noreferrer">
                          {element === "https://www.behance.net/oluwagbferanmi"
                            ? (icons[3] = <FaBehance />)
                            : icons[index]}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <p>Get in touch</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Credits;
