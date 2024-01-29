import { createContext, useReducer, useState } from "react";
import { useErrorBoundary } from "components/common/ExternalComponents";
import {
  highlightArrowInitialState,
  highlightArrowReducer,
} from "hooks/reducer/Reducer";
import PlaylistQueryHook from "hooks/PlaylistQueryHook";

export const ResultContext = createContext<null | any>(null);

const Context = (props: any) => {
  const [linkString, setLinkString] = useState<string>("");
  const [btnValue, setBtnValue] = useState<string[]>([]);
  const [state, dispatch] = useReducer(
    highlightArrowReducer,
    highlightArrowInitialState
  );

  const { showBoundary } = useErrorBoundary();

  const { error, data, refetch, isLoading, isFetching } = PlaylistQueryHook({
    linkString,
    btnValue,
    state,
    dispatch,
  });

  if (error) {
    showBoundary(error);
  }

  let value = {
    state,
    dispatch,
    linkString,
    setLinkString,
    btnValue,
    setBtnValue,
    data,
    refetch,
    error,
    isLoading,
    isFetching,
  };

  return (
    <ResultContext.Provider value={value}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default Context;
