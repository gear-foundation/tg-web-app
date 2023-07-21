import React from "react";
import { CopyButton, DefaultButton } from "../buttons";

import styles from "./styles.module.scss";

export const SeedPhrase = ({ seedPhrase, handleConfirmation }) => {
  return (
    <>
      <h1>Seed phrase</h1>
      <p>
        Please write down these 12 words below - it is your seed phrase. This is
        the only way to restore access to your wallet if needed. Without it,
        access will be lost, and we won't be able to help you.
        <br /> <br />
        Please keep this information in a secure place.
      </p>
      <div className={styles.seedPhrase}>{seedPhrase}</div>

      <div className={styles.buttons}>
        <CopyButton text={"Copy Seed phrase"} valueCopy={seedPhrase} />
        <DefaultButton text={"Continue"} action={handleConfirmation} />

        <div className={styles.message}>
          <p>Click “Continue”, if you have saved the seed phrase.</p>
        </div>
      </div>
    </>
  );
};
