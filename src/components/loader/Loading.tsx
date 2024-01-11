import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import AnimatedText from "../animationFunc/AnimatedText";

const Loading = () => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    const progressCount = setInterval(() => {
      setCount((count) => count + 10);
    }, 500);
    return () => {
      if (count === 100) {
        setProgress(!progress);
        setCount(0);
      }
      clearInterval(progressCount);
    };
  }, [count, progress]);

  return (
    <>
      <div>
        <h4>
          {progress ? (
            <AnimatedText text=" A playlist of 200 tracks would take about 1 min and 40 secs." />
          ) : (
            <AnimatedText text="Migration time roughly depends on the number of tracks on your playlist." />
          )}
        </h4>
      </div>
      <ScaleLoader color="#7F61FF" />
    </>
  );
};

export default Loading;
