import React from "react";
import { CopyButton } from "../buttons";

import styles from "./styles.module.scss";

export const AccountAddress = ({ accountAddress }) => {
  return (
    <>
      <h1>Your Substrate address</h1>
      <p>
        Congratulations! Your Substrate account has been created. Please copy
        its address to use it in the Bot and other Vara Network activities.
      </p>
      <div className={styles.accountAddress}>{accountAddress}</div>

      <div className={styles.buttons}>
        <CopyButton text={"Copy Seed phrase"} valueCopy={accountAddress}/>
      </div>
    </>
  );
};
