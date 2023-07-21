import React from "react";
import { DefaultButton, BackButton } from "../buttons";

import styles from "./styles.module.scss";

export const RestoreOrder = ({
  checkSeed,
  setInputSeed,
  inputSeed,
  isErrorValidSeed,
  handleGoBack,
}) => {
  return (
    <>
      <h1>Restore order of seed words</h1>
      <p>
        Please write down these 12 words below - it is your seed phrase. This is
        the only way to restore access to your wallet if needed. Without it,
        access will be lost, and we won't be able to help you.
        <br />
        <br />
        Please keep this information in a secure place.
      </p>
      <textarea
        className={styles.input}
        type="text"
        onChange={(e) => setInputSeed(e.target.value)}
        value={inputSeed}
      />

      <div className={styles.buttons}>
        <BackButton action={handleGoBack} />
        <DefaultButton text={"Continue"} action={checkSeed} />
      </div>

      {isErrorValidSeed && (
        <div className={styles.error}>
          Invalid seed phrase, please check the entered data and try again
        </div>
      )}
    </>
  );
};
