export type Text = {
  text: string;
};

export type ResultArray = {
  label: string;
  content: JSX.Element;
  subheading: string;
}[];

export type FallBackProps = {
  error: any;
  resetErrorBoundary: any;
};
