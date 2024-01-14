import FallBack from "./components/fallback/FallBack";
import Context from "./context/Context";
import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  const errorHandler = (error: any, info: React.ErrorInfo) => {
    console.log(error);
    console.log(info);
  };

  return (
    <ErrorBoundary FallbackComponent={FallBack} onError={errorHandler}>
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
