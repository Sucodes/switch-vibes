import { useContext } from "react";
import { FaFlag, motion } from "components/common/ExternalComponents";
import { ResultContext } from "hooks/context/Context";
import { navbarContainer, navbarItem } from "util/variants/FramerVariants";

const FlaggedDisplay = () => {
  const { data } = useContext(ResultContext);
  const { flagged } = data.data;

  return (
    <motion.ul variants={navbarContainer} initial="hidden" animate="visible">
      {flagged?.length >= 1 ? (
        Object.values(flagged).map((element: any, index: number) => {
          return (
            index <= 4 && (
              <motion.li key={index} variants={navbarItem}>
                <span>
                  <FaFlag color="#7F61FF" />
                </span>
                <span>{element?.title}</span>
              </motion.li>
            )
          );
        })
      ) : (
        <motion.li variants={navbarItem}>
          There are no flagged tracks from this playlist.
        </motion.li>
      )}
      {flagged?.length > 5 && (
        <motion.span variants={navbarItem}>...amongst others</motion.span>
      )}
    </motion.ul>
  );
};

export default FlaggedDisplay;
