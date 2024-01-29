import { useEffect, useContext } from "react";
import {
  apple,
  arrow1,
  arrow1Active,
  arrow2,
  arrow2Active,
  arrow3,
  arrow3Active,
  arrow4,
  arrow4Active,
  arrow5,
  arrow5Active,
  arrow6,
  arrow6Active,
  spotify,
  youtube,
} from "assets/assetPath";
import { motion } from "components/common/ExternalComponents";
import Loading from "components/loader/Loading";
import styles from "components/button/HeaderButtons.module.scss";
import { ErrorChecks } from "components/error/ErrorChecks";
import { ResultContext } from "hooks/context/Context";
import { arrowVariants } from "util/variants/FramerVariants";
import { HighlightArrow, handleBtnClick } from "util/helperFns/HighlightArrow";

const HeaderButtons = () => {
  const {
    state,
    dispatch,
    linkString,
    btnValue,
    setBtnValue,
    refetch,
    isLoading,
    isFetching,
  } = useContext(ResultContext);

  useEffect(() => {
    HighlightArrow(btnValue.join("_to_"), state, dispatch);
  }, [btnValue]);

  return (
    <>
      {isLoading || isFetching ? (
        <Loading />
      ) : (
        <>
          <div className={styles.header_buttons__top_layer}>
            <button
              onClick={(e) => {
                handleBtnClick("yt", setBtnValue);
              }}
            >
              <img src={youtube} alt="youtube music logo" />
            </button>
          </div>

          <div className={styles.header_buttons__middle_layer}>
            <div className={styles.header_buttons__middle_layer__div}>
              <motion.img
                className={styles.header_buttons__middle_layer__div_img3}
                src={state.apBtnYt ? arrow3Active : arrow3}
                alt=""
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.img
                className={styles.header_buttons__middle_layer__div_img4}
                src={state.ytBtnAp ? arrow4Active : arrow4}
                alt=""
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
            <button
              onClick={() =>
                ErrorChecks({ linkString, btnValue, state, dispatch, refetch })
              }
            >
              <span>Switch the vibe</span>
            </button>
            <div className={styles.header_buttons__middle_layer__div}>
              <motion.img
                className={styles.header_buttons__middle_layer__div_img5}
                src={state.spBtnYt ? arrow5Active : arrow5}
                alt=""
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.img
                className={styles.header_buttons__middle_layer__div_img6}
                src={state.ytBtnSp ? arrow6Active : arrow6}
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
                handleBtnClick("apple", setBtnValue);
              }}
            >
              <motion.img src={apple} alt="apple music logo" />
            </button>

            <div>
              <motion.img
                src={state.spBtnAp ? arrow1Active : arrow1}
                className={styles.header_buttons__bottom_layer__div_img1}
                alt=""
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
              <motion.img
                src={state.apBtnSp ? arrow2Active : arrow2}
                className={styles.header_buttons__bottom_layer__div_img2}
                alt=""
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              />
            </div>

            <button
              onClick={(e) => {
                handleBtnClick("spotify", setBtnValue);
              }}
            >
              <img src={spotify} alt="spotify logo" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderButtons;
