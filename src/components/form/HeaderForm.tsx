import { useContext, useEffect, useState } from "react";
import styles from "components/form/HeaderForm.module.scss";
import { ResultContext } from "hooks/context/Context";
import { UrlCheckerProps } from "util/types/FunctionTypes";

const checkUrl = ({ e, setLink, setLinkString }: UrlCheckerProps) => {
  e.preventDefault();
  setLinkString(e.target.value);
  const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;
  urlRegex.test(e.target.value) && setLink(true);
};

const HeaderForm = () => {
  const [link, setLink] = useState<boolean>(false);
  const { linkString, setLinkString, isFetching } = useContext(ResultContext);

  useEffect(() => {
    if (isFetching) {
      setLinkString("");
      setLink(false);
    }
  }, [isFetching]);

  return (
    <form className={styles.header_form}>
      <input
        className={styles.header_form_input}
        id="url"
        name="url"
        type="url"
        value={linkString}
        onChange={(e) => checkUrl({ e, setLink, setLinkString })}
        placeholder="Paste playlist URL"
      />
      {(linkString !== "" && link) || linkString === "" ? (
        ""
      ) : (
        <span>Enter a valid URL</span>
      )}
    </form>
  );
};

export default HeaderForm;
