import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Context>
          <Layout />
        </Context>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
