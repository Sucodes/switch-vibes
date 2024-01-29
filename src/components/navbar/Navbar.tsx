import { useState } from "react";
import { logo } from "assets/assetPath";
import { motion, IoCloseOutline } from "components/common/ExternalComponents";
import styles from "components/navbar/Navbar.module.scss";
import { navbarContainer, navbarItem } from "util/variants/FramerVariants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const listItems: string[] = ["About", "Perks", "FAQs", "Credits"];
  const handleNavigationMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav_logo}>
          <a href="/" rel="noreferrer">
            <img src={logo} alt="SwitchVibes logo" />
          </a>
        </div>

        <div className={styles.nav_menu} onClick={handleNavigationMenu}>
          {showMenu ? (
            <IoCloseOutline color="#6d4453" />
          ) : (
            <motion.div
              variants={navbarContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={navbarItem}></motion.span>
              <motion.span variants={navbarItem}></motion.span>
              <motion.span variants={navbarItem}></motion.span>
            </motion.div>
          )}
        </div>

        {
          <div className={styles.nav_links}>
            <ul>
              {listItems.map((element, index) => {
                return (
                  <motion.a
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    href={"#" + element.toLowerCase()}
                    rel="noreferrer"
                    key={index}
                  >
                    <li>{element}</li>
                  </motion.a>
                );
              })}
            </ul>
          </div>
        }
      </nav>

      {showMenu && (
        <div className={styles.nav_menu__links}>
          <div onClick={handleNavigationMenu}>
            <IoCloseOutline color="#6d4453" style={{ zIndex: "5" }} />
          </div>
          <motion.ul
            variants={navbarContainer}
            initial="hidden"
            animate="visible"
          >
            {listItems.map((element, index) => {
              return (
                <motion.li
                  key={index}
                  variants={navbarItem}
                  onClick={handleNavigationMenu}
                >
                  <a href={"#" + element.toLowerCase()} rel="noreferrer">
                    {element}
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
