import { Component } from "react";

export default class ErrorBoundary extends Component<any, any> {
  state: { hasError: boolean; error?: Error };

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error: any, info: any) {
    // console.log(this.state?.error);
    this.setState({ hasError: true });
    console.log(error);
    console.log(info);
    console.error(error, info);
  }

  render() {
    console.log("Rendering ErrorBoundary");
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return "An error occurred";
    }
    console.log("Rendering ErrorBoundary 1");
    return this.props.children;
  }
}
