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
  setLinkString?: React.Dispatch<React.SetStateAction<string>>;
};

export type UrlCheckerProps = {
  e: React.ChangeEvent<HTMLInputElement>;
  link: boolean;
  setLink: React.Dispatch<React.SetStateAction<boolean>>;
  setLinkString: React.Dispatch<React.SetStateAction<string>>;
};
