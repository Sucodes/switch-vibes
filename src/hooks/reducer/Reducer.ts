import { HighlightArrowProps } from "util/types/FunctionTypes";

export const highlightArrowInitialState: HighlightArrowProps = {
  ytBtnAp: false,
  spBtnAp: false,
  ytBtnSp: false,
  spBtnYt: false,
  apBtnSp: false,
  apBtnYt: false,
};

export const highlightArrowReducer = (
  state: HighlightArrowProps,
  action: any
) => {
  switch (action.type) {
    case "yt_to_spotify":
      return { ...state, ytBtnSp: true };
    case "apple_to_spotify":
      return { ...state, apBtnSp: true };
    case "apple_to_yt":
      return { ...state, apBtnYt: true };
    case "spotify_to_yt":
      return { ...state, spBtnYt: true };
    case "spotify_to_apple":
      return { ...state, spBtnAp: true };
    case "yt_to_apple":
      return { ...state, ytBtnAp: true };
    case "reset":
      return highlightArrowInitialState;
    default:
      return { ...state };
  }
};
