import { createContext, useState } from "react";

export const ResultContext = createContext<null | any>(null);

const Context = (props: any) => {
  const [result, setResult] = useState(false);
  const [resultData, setResultData] = useState<{ [key: string]: any }>({});
  const value = { result, setResult, resultData, setResultData };

  return (
    <ResultContext.Provider value={value}>
      {props.children}
    </ResultContext.Provider>
  );
};

export default Context;
