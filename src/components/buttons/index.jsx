import React from "react";
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
  const onCopyValue = () => {
    navigator.clipboard.writeText(valueCopy);
  };

  return (
    <button className={styles.copyButton} type="button" onClick={onCopyValue}>
      <img src={IconCopy} alt="copy icon" />
      {text}
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
