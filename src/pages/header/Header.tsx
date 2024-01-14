import { useEffect, useState, useContext } from "react";
import {
  apple,
  arrow1,
  arrow2,
  arrow3,
  arrow4,
  arrow5,
  arrow6,
  youtube,
  spotify,
  arrow1Active,
  arrow2Active,
  arrow3Active,
  arrow4Active,
  arrow5Active,
  arrow6Active,
} from "../../assets/assetPath";
import { motion } from "framer-motion";
import { baseURL } from "../../util/ReactQuery";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/loader/Loading";
import Result from "../result/Result";
import { ResultContext } from "../../context/Context";
import { arrowVariants } from "../../util/FramerVariants";
import styles from "./Header.module.scss";
import { useErrorBoundary } from "react-error-boundary";

const Header = () => {
  const [link, setLink] = useState<boolean>(false);
  const [linkString, setLinkString] = useState<string>("");
  const [spBtnYt, setSpBtnYt] = useState<boolean>(false);
  const [spBtnAp, setSpBtnAp] = useState<boolean>(false);
  const [ytBtnAp, setYtBtnAp] = useState<boolean>(false);
  const [ytBtnSp, setYtBtnSp] = useState<boolean>(false);
  const [apBtnYt, setApBtnYt] = useState<boolean>(false);
  const [apBtnSp, setApBtnSp] = useState<boolean>(false);
  const [btnValue, setBtnValue] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { result, setResult, setResultData } = useContext(ResultContext);

  const { showBoundary } = useErrorBoundary();

  const checkUrl = (e: any) => {
    e.preventDefault();
    setLinkString(e.target.value);
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    urlRegex.test(e.target.value) && setLink(!link);
  };

  let btnArr: string[] = [];
  const handleClick = (str: string) => {
    btnArr.push(str);
    btnArr.length === 2 && setBtnValue([btnArr[0], btnArr[1]]);
    return btnArr;
  };

  const highlightArrowFunc = (str: string) => {
    setApBtnSp(false);
    setApBtnYt(false);
    setYtBtnSp(false);
    setYtBtnAp(false);
    setSpBtnYt(false);
    setSpBtnAp(false);
    if (str.startsWith("spotify")) {
      return str.endsWith("yt")
        ? setSpBtnYt(true)
        : str.endsWith("apple")
        ? setSpBtnAp(true)
        : toast.error(
            "You can only migrate between playlists of different platforms."
          );
    } else if (str.startsWith("yt")) {
      return str.endsWith("spotify")
        ? setYtBtnSp(true)
        : str.endsWith("apple")
        ? setYtBtnAp(true)
        : toast.error(
            "You can only migrate between playlists of different platforms."
          );
    } else {
      return str.endsWith("yt")
        ? setApBtnYt(true)
        : str.endsWith("spotify")
        ? setApBtnSp(true)
        : toast.error(
            "You can only migrate between playlists of different platforms."
          );
    }
  };

  useEffect(() => {
    btnValue.join("_to_") !== "" && highlightArrowFunc(btnValue.join("_to_"));
  }, [btnValue]);

  const customFetch = async () => {
    setApBtnSp(false);
    setApBtnYt(false);
    setYtBtnSp(false);
    setYtBtnAp(false);
    setSpBtnYt(false);
    setSpBtnAp(false);
    if (linkString !== "" && btnValue.join("_to_") !== "") {
      setIsLoading(true);
      try {
        if (ytBtnAp || spBtnAp || apBtnSp || apBtnYt) {
          toast.error("Apple music conversions are currently not supported.");
          setIsLoading(false);
        } else if (btnValue[0] === btnValue[1]) {
          toast.error(
            "You can only migrate between playlists of different platforms."
          );
          setIsLoading(false);
        } else {
          const res = await axios.post(`${baseURL}/${btnValue.join("_to_")}/`, {
            yt_playlist_url: ytBtnSp ? linkString : undefined,
            spotify_playlist_url: spBtnYt ? linkString : undefined,
          });
          setResultData(res?.data);
          toast.success("Success!");
          setLinkString("");
          setResult(true);
          setIsLoading(false);
        }
      } catch (error: any) {
        console.log(error);
        error?.message === "Network Error" && showBoundary(error);
        (error?.response?.status === 400 || error?.response?.status === 404) &&
          showBoundary(error);
        error?.response?.status === 500 && showBoundary(error);
        // toast.error("An error occurred. Please try again.");
        setIsLoading(false);
      }
    } else if (linkString !== "" && btnValue.join("_to_") === "") {
      return toast.error(
        "Please select the platform you would like to switch to."
      );
    } else if (linkString === "" && btnValue.join("_to_") !== "") {
      return toast.error("Please provide a valid playlist url.");
    } else {
      return toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.header}>
      <form className={styles.header_form}>
        <input
          className={styles.header_form_input}
          id="url"
          name="url"
          type="url"
          value={linkString}
          onChange={(e: any) => checkUrl(e)}
          placeholder="Paste playlist URL"
        />
        {(link && linkString !== "") || linkString === "" ? (
          ""
        ) : (
          <span>Enter a valid URL</span>
        )}
      </form>
      <div className={styles.header_buttons}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.header_buttons__top_layer}>
              <button
                onClick={(e) => {
                  handleClick("yt");
                }}
              >
                <img src={youtube} alt="youtube music logo" />
              </button>
            </div>

            <div className={styles.header_buttons__middle_layer}>
              <div className={styles.header_buttons__middle_layer__div}>
                <motion.img
                  className={styles.header_buttons__middle_layer__div_img3}
                  src={apBtnYt ? arrow3Active : arrow3}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.img
                  className={styles.header_buttons__middle_layer__div_img4}
                  src={ytBtnAp ? arrow4Active : arrow4}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
              <button onClick={() => customFetch()}>
                <span>Switch the vibe</span>
              </button>
              <div className={styles.header_buttons__middle_layer__div}>
                <motion.img
                  className={styles.header_buttons__middle_layer__div_img5}
                  src={spBtnYt ? arrow5Active : arrow5}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.img
                  className={styles.header_buttons__middle_layer__div_img6}
                  src={ytBtnSp ? arrow6Active : arrow6}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </div>

            <div className={styles.header_buttons__bottom_layer}>
              <button
                onClick={(e) => {
                  handleClick("apple");
                }}
              >
                <motion.img src={apple} alt="apple music logo" />
              </button>

              <div>
                <motion.img
                  src={spBtnAp ? arrow1Active : arrow1}
                  className={styles.header_buttons__bottom_layer__div_img1}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.img
                  src={apBtnSp ? arrow2Active : arrow2}
                  className={styles.header_buttons__bottom_layer__div_img2}
                  alt=""
                  variants={arrowVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>

              <button
                onClick={(e) => {
                  handleClick("spotify");
                }}
              >
                <img src={spotify} alt="spotify logo" />
              </button>
            </div>
          </>
        )}
      </div>
      {result ? <Result /> : null}
    </section>
  );
};

export default Header;
