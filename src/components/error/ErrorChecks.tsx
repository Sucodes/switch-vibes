import { toast } from "components/common/ExternalComponents";
import { UpdateProps } from "util/types/FunctionTypes";

export const ErrorChecks = ({
  linkString,
  btnValue,
  state,
  dispatch,
  refetch,
}: UpdateProps) => {
  dispatch({ type: "reset" });

  if (linkString !== "" && btnValue.join("_to_") === "") {
    return toast.error(
      "Please select the platform you would like to switch to."
    );
  }

  if (linkString === "" && btnValue.join("_to_") !== "") {
    return toast.error("Please provide a valid playlist url.");
  }

  if (linkString !== "" && btnValue.join("_to_") !== "") {
    if (state.ytBtnAp || state.spBtnAp || state.apBtnSp || state.apBtnYt) {
      return toast.error(
        "Apple music conversions are currently not supported."
      );
    } else if (btnValue[0] === btnValue[1]) {
      return toast.error(
        "You can only migrate between playlists of different platforms."
      );
    } else {
      return refetch();
    }
  }
};
