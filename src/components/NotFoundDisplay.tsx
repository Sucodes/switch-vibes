import { useContext } from "react";
import { motion } from "framer-motion";
import { TiCancel } from "react-icons/ti";
import { ResultContext } from "../context/Context";
import { navbarContainer, navbarItem } from "../util/FramerVariants";

const NotFoundDisplay = () => {
  const { resultData } = useContext(ResultContext);
  const { nulls } = resultData;

  return (
    <motion.ul variants={navbarContainer} initial="hidden" animate="visible">
      {nulls?.length >= 1 ? (
        Object.values(nulls)?.map((element: any, index: number) => {
          return (
            <motion.li key={index} variants={navbarItem}>
              <span>
                <TiCancel color="#7F61FF" style={{ fontSize: "20px" }} />
              </span>
              <span>{element?.title}</span>
            </motion.li>
          );
        })
      ) : (
        <motion.li variants={navbarItem}>
          All tracks were found so nothing to see here.
        </motion.li>
      )}
      {nulls?.length > 5 && (
        <motion.span variants={navbarItem}>...amongst others</motion.span>
      )}
    </motion.ul>
  );
};

export default NotFoundDisplay;
