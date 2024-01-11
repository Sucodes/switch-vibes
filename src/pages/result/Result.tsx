import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaCopy, FaPause, FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "../../components/animationFunc/AnimatedText";
import TrackDisplay from "../../components/TrackDisplay";
import FlaggedDisplay from "../../components/FlaggedDisplay";
import NotFoundDisplay from "../../components/NotFoundDisplay";
import { ResultArray } from "../../util/Types";
import { ResultContext } from "../../context/Context";
import { copyContent } from "../../util/ClipboardFn";
import styles from "./Result.module.scss";

const Result = () => {
  const [changeIcon, setChangeIcon] = useState(false);
  const [selectedTab, setSelectedTab] = useState(resultViews[0]);
  const { setResult, resultData } = useContext(ResultContext);
  const { link } = resultData;

  return (
    <div className={styles.result}>
      <div className={styles.result_close}>
        <IoCloseOutline
          onClick={() => setResult(false)}
          color="#7F61FF"
          style={{ zIndex: "2" }}
        />
      </div>

      <h2>
        <AnimatedText text="Your new playlist's here." />
      </h2>

      <div className={styles.result_track}>
        <nav>
          <ul>
            {resultViews.map((item: any, index: number) => {
              return (
                <li
                  key={index}
                  className={item.label === selectedTab.label ? `active` : ""}
                  onClick={() => setSelectedTab(item)}
                  style={{
                    backgroundColor:
                      selectedTab.label === item.label ? "#7F61FF" : "",
                    borderRadius:
                      selectedTab.label === item.label ? "5px 5px 0px 0px" : "",
                  }}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </nav>

        <AnimatePresence>
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.result_track__div}
          >
            <h3 onClick={() => copyContent(link)}>
              <span>{selectedTab ? selectedTab.subheading : null}</span>
              {selectedTab.subheading === "Copy playlist url" && (
                <FaCopy style={{ marginLeft: "20px", cursor: "pointer" }} />
              )}
            </h3>

            {selectedTab ? selectedTab.content : null}

            <button onClick={() => setChangeIcon(!changeIcon)}>
              <a href={link} target="_blank" rel="noreferrer">
                {changeIcon ? <FaPause /> : <FaPlay />}
              </a>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Result;

export const resultViews: ResultArray = [
  {
    label: "Tracks",
    content: <TrackDisplay />,
    subheading: "Copy playlist url",
  },
  {
    label: "Flagged",
    content: <FlaggedDisplay />,
    subheading: "Flagged tracks",
  },
  {
    label: "Null",
    content: <NotFoundDisplay />,
    subheading: "Tracks not found",
  },
];
