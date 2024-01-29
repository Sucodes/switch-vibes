import { logo } from "assets/assetPath";
import styles from "components/fallback/Fallback.module.scss";
import { FallBackProps } from "util/types/Others";
import { queryClient } from "index";

const FallBack = ({ error, resetErrorBoundary }: FallBackProps) => {
  let err = error?.response?.data?.error;

  return (
    <section className={styles.fallback}>
      <h1>
        <a href="/" rel="noreferrer">
          <img src={logo} alt="SwitchVibes logo" />
        </a>
      </h1>
      <div>
        <h1>Oops!</h1>
        <h3>
          {(err
            ? [...err]
            : error.message === "Request failed with status code 500"
            ? "Server is currently down"
            : error.message) || "Something went wrong"}
        </h3>
        <p>Looks like something went wrong.</p>
        <div>
          <button
            onClick={() => {
              //removes query from cache so it does not rerender
              queryClient.removeQueries({
                queryKey: ["ConvertPlaylist"],
                exact: true,
              });
              resetErrorBoundary(); //unmounts the error boundary
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default FallBack;
