import { FallBackProps } from "../../util/Types";
import styles from "./Fallback.module.scss";
import { CiRedo } from "react-icons/ci";
import { logo } from "../../assets/assetPath";

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
          <button onClick={resetErrorBoundary}>
            <CiRedo />
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default FallBack;
