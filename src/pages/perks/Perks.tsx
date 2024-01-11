import { useRef, useState } from "react";
import styles from "./Perks.module.scss";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { logo } from "../../assets/assetPath";
import { perkData } from "../../util/Content";
import { perksContainer, perksItem } from "../../util/FramerVariants";
import { IoCloseOutline } from "react-icons/io5";

const Perks = () => {
  const constraintsRef = useRef(null);
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const cardFlip = (index: number) => {
    setIsSelected(isSelected === index ? null : index);
  };

  return (
    <section id="perks" className={styles.perks}>
      <motion.h1>
        Why Choose <img src={logo} alt="SwitchVibes logo" />?
      </motion.h1>
      <motion.div
        ref={constraintsRef}
        variants={perksContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className={styles.perks_div}
      >
        {perkData.map((element: any, index: number) => {
          return (
            <motion.div
              key={index}
              variants={perksItem}
              onClick={() => cardFlip(index)}
              className={
                isSelected === index
                  ? `${styles.perks_div_modal}`
                  : `${styles.perks_div_div}`
              }
              layout
            >
              {isSelected === index ? (
                <div>
                  <span>
                    <IoCloseOutline
                      onClick={() => cardFlip(index)}
                      color="#7F61FF"
                    />
                  </span>
                  <h3>{element.heading}</h3>
                  <p>{element?.subheading}</p>
                </div>
              ) : (
                <motion.div layout="position">
                  {element?.heading}
                  <br /> <br />
                  <FaCheck color="#7F61FF" fontSize={"50px"} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Perks;