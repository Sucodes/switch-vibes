import { useContext, useEffect, useState } from "react";
import styles from "components/form/HeaderForm.module.scss";
import { ResultContext } from "hooks/context/Context";
import { UrlCheckerProps } from "util/types/FunctionTypes";

const checkUrl = ({ e, link, setLink, setLinkString }: UrlCheckerProps) => {
  e.preventDefault();
  setLinkString(e.target.value);
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  urlRegex.test(e.target.value) && setLink(!link);
};

const HeaderForm = () => {
  const [link, setLink] = useState<boolean>(false);
  const { linkString, setLinkString, isFetching } = useContext(ResultContext);

  useEffect(() => {
    isFetching && setLinkString("");
  }, [isFetching]);

  return (
    <form className={styles.header_form}>
      <input
        className={styles.header_form_input}
        id="url"
        name="url"
        type="url"
        value={linkString}
        onChange={(e) => checkUrl({ e, link, setLink, setLinkString })}
        placeholder="Paste playlist URL"
      />
      {(link && linkString !== "") || linkString === "" ? (
        ""
      ) : (
        <span>Enter a valid URL</span>
      )}
    </form>
  );
};

export default HeaderForm;
