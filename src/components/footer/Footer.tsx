import React from "react";
import styles from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  const listItems: string[] = ["About", "Perks", "FAQs", "Credits"];

  return (
    <section className={styles.footer}>
      <div className={styles.footer_question}>
        <h1>Ready to Switch Your Vibe?</h1>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Switch the vibe
        </button>
      </div>
      <hr />
      <div className={styles.footer_links}>
        <ul>
          {listItems.map((element, index) => {
            return (
              <motion.li
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                key={index}
              >
                <a href={`#` + element.toLowerCase()}>{element}</a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
