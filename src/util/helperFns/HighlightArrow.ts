import { highlightArrowInitialState } from "hooks/reducer/Reducer";
import { HighlightArrowProps } from "util/types/FunctionTypes";

let btnArr: string[] = [];
export const handleBtnClick = (
  str: string,
  setBtnValue: React.Dispatch<React.SetStateAction<string[]>>
) => {
  btnArr.push(str);
  btnArr.length === 2 && setBtnValue([btnArr[0], btnArr[1]]);
  return btnArr;
};

export const HighlightArrow = (
  str: string,
  state: HighlightArrowProps,
  dispatch: React.Dispatch<any>
) => {
  btnArr = [];
  dispatch({ type: "reset" });

  switch (str) {
    case "yt_to_spotify":
      return dispatch({ type: "yt_to_spotify" });
    case "apple_to_spotify":
      return dispatch({ type: "apple_to_spotify" });
    case "yt_to_apple":
      return dispatch({ type: "yt_to_apple" });
    case "apple_to_yt":
      return dispatch({ type: "apple_to_yt" });
    case "spotify_to_apple":
      return dispatch({ type: "spotify_to_apple" });
    case "spotify_to_yt":
      return dispatch({ type: "spotify_to_yt" });
    case "reset":
      return highlightArrowInitialState;
    default:
      return { ...state };
  }
};
