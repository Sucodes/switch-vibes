import axios from "axios";
import { UpdateProps } from "util/types/FunctionTypes";

const baseURL = process.env.REACT_APP_BASE_URL;

export const CustomRequest = async ({
  linkString,
  btnValue,
  state,
  dispatch,
}: UpdateProps) => {
  dispatch({ type: "reset" });
  return await axios.post(`${baseURL}${btnValue.join("_to_")}/`, {
    yt_playlist_url: state.ytBtnSp ? linkString : undefined,
    spotify_playlist_url: state.spBtnYt ? linkString : undefined,
  });
};
