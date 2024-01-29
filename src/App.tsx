import {
  ErrorBoundary,
  ToastContainer,
} from "components/common/ExternalComponents";
import FallBack from "components/fallback/FallBack";
import Context from "hooks/context/Context";
import Layout from "layout/Layout";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ErrorBoundary FallbackComponent={FallBack}>
      <Context>
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
        <Layout />
      </Context>
    </ErrorBoundary>
  );
}

export default App;
