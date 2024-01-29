import { motion } from "components/common/ExternalComponents";
import { Text } from "util/types/Others";
import {
  AnimatedTextChild,
  AnimatedTextContainer,
} from "util/variants/FramerVariants";

const AnimatedText = ({ text }: Text) => {
  const words = text.split(" ");

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: "2em",
        justifyContent: "center",
        flexWrap: "wrap",
        textAlign: "center",
      }}
      variants={AnimatedTextContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => {
        return (
          <motion.span
            style={{ marginRight: "5px" }}
            key={index}
            variants={AnimatedTextChild}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;
