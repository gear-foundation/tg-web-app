import React, { useState } from "react";
import IconCopy from "../../assets/copy.svg";
import styles from "./styles.module.scss";

export const DefaultButton = ({ text, action }) => {
  return (
    <button className={styles.defaultButton} type="button" onClick={action}>
      {text}
    </button>
  );
};

export const CopyButton = ({ text, valueCopy }) => {
  const [isShowMessage, setShowMessage] = useState(false);

  const onCopyValue = () => {
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", valueCopy);
    document.body.appendChild(tempInput);

    tempInput.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setShowMessage(true);
      }
    } catch (e) {
      alert(e);
    } finally {
      document.body.removeChild(tempInput);
    }
  };

  return (
    <button
      className={styles.copyButton}
      type="button"
      onClick={() => onCopyValue()}
    >
      {!isShowMessage ? (
        <>
          <img src={IconCopy} alt="copy icon" />
          {text}
        </>
      ) : (
        "Copied!"
      )}
    </button>
  );
};

export const BackButton = ({ action }) => {
  return (
    <button className={styles.backButton} type="button" onClick={action}>
      Back
    </button>
  );
};
