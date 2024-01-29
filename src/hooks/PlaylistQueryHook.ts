import { useQuery } from "components/common/ExternalComponents";
import { CustomRequest } from "./CustomRequest";
import { UpdateProps } from "util/types/FunctionTypes";

const PlaylistQueryHook = ({
  linkString,
  btnValue,
  state,
  dispatch,
}: UpdateProps) =>
  useQuery({
    queryKey: ["ConvertPlaylist"],
    queryFn: () => CustomRequest({ linkString, btnValue, state, dispatch }),
    enabled: false,
  });

export default PlaylistQueryHook;
