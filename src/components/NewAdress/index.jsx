import React from "react";
import { DefaultButton } from "../buttons";

export const NewAddress = ({ generateSeedPhrase }) => {
  return (
    <>
      <h1>New Substrate address</h1>
      <p>
        A seed phrase is required to create a substrate address. It consists of
        a set of words that serve as a backup for cryptographic keys.
        <br />
        <br />
        Safeguarding the seed phrase is crucial to maintain control and protect
        assets on the blockchain.
      </p>
      <DefaultButton
        text={"Click to generate a seed phrase"}
        action={generateSeedPhrase}
      />
    </>
  );
};
