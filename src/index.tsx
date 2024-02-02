import ReactDOM from "react-dom/client";
import App from "App";
import "assets/styles/style.css";
import {
  QueryClient,
  QueryClientProvider,
  // ReactQueryDevtools,
} from "components/common/ExternalComponents";
import { inject } from "@vercel/analytics";

inject();

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" /> */}
  </QueryClientProvider>
);
