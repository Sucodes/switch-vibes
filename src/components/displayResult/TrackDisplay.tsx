import { useContext } from "react";
import { FaCheck, motion } from "components/common/ExternalComponents";
import { ResultContext } from "hooks/context/Context";
import { navbarContainer, navbarItem } from "util/variants/FramerVariants";

const TrackDisplay = () => {
  const { data } = useContext(ResultContext);
  const { playlist } = data.data;

  return (
    <motion.ul variants={navbarContainer} initial="hidden" animate="visible">
      {playlist.length >= 1 ? (
        Object.values(playlist)?.map((element: any, index: number) => {
          return (
            index <= 4 && (
              <motion.li key={index} variants={navbarItem}>
                <span>
                  <FaCheck color="#7F61FF" />
                </span>
                <span>{element?.title}</span>
              </motion.li>
            )
          );
        })
      ) : (
        <motion.li>There are no flagged tracks from this playlist</motion.li>
      )}
      {playlist.length > 5 && (
        <motion.span variants={navbarItem}>...amongst others</motion.span>
      )}
    </motion.ul>
  );
};

export default TrackDisplay;
