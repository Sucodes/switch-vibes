export type HighlightArrowProps = {
  spBtnAp: boolean;
  spBtnYt: boolean;
  ytBtnAp: boolean;
  ytBtnSp: boolean;
  apBtnYt: boolean;
  apBtnSp: boolean;
};

export type UpdateProps = {
  linkString: string;
  btnValue: string[];
  state: HighlightArrowProps;
  dispatch: React.Dispatch<any>;
  refetch?: any;
};

export type UrlCheckerProps = {
  e: React.ChangeEvent<HTMLInputElement>;
  setLink: React.Dispatch<React.SetStateAction<boolean>>;
  setLinkString: React.Dispatch<React.SetStateAction<string>>;
};
