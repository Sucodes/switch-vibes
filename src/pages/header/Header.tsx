import { useContext, useEffect, useState } from "react";
import HeaderForm from "components/form/HeaderForm";
import HeaderButtons from "components/button/HeaderButtons";
import Result from "pages/result/Result";
import styles from "pages/header/Header.module.scss";
import { ResultContext } from "hooks/context/Context";

const Header = () => {
  const [result, setResult] = useState<boolean>(false);
  const { data } = useContext(ResultContext);

  useEffect(() => {
    data !== undefined && setResult(true);
  }, [data]);

  return (
    <section className={styles.header}>
      <HeaderForm />
      <div className={styles.header_buttons}>
        <HeaderButtons />
      </div>
      {result ? <Result setResult={setResult} /> : null}
    </section>
  );
};

export default Header;
