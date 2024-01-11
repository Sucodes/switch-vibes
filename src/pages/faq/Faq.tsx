import { useState } from "react";
import styles from "./Faq.module.scss";
import { motion } from "framer-motion";
import { faqVariants } from "../../util/FramerVariants";
import { faqData } from "../../util/Content";

const Faq = () => {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  const toggle = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
      return false;
    }
    setSelectedId(id);
  };

  return (
    <section id="faqs" className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.faq_question}>
        <div className={styles.faq_question_card}>
          {faqData &&
            faqData.map((element, index) => (
              <motion.div
                key={index}
                onClick={() => toggle(index)}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={faqVariants}
              >
                <div>
                  <motion.h4 variants={faqVariants}>
                    <span>{element.title}</span>{" "}
                    {selectedId === index ? (
                      <span style={{ fontSize: "30px" }}>-</span>
                    ) : (
                      <span style={{ fontSize: "30px" }}>+</span>
                    )}
                  </motion.h4>
                  <hr />
                </div>
                {selectedId === index ? (
                  <div>
                    <p>{element.answer}</p>
                  </div>
                ) : null}
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
