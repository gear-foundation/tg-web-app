import React, { useState } from "react";
import { Keyring } from "@polkadot/api";
import { mnemonicGenerate } from "@polkadot/util-crypto";

import Logo from "./assets/logo-vara.svg";
import "./App.scss";
import "./assets/fonts/Anuphan2.ttf";
import { NewAddress } from "./components/NewAdress";
import { SeedPhrase } from "./components/SeedPhrase";
import { AccountAddress } from "./components/AccountAddress";
import { RestoreOrder } from "./components/RestoreOrder";

function App() {
  const keyring = new Keyring();
  const [seedPhrase, setSeedPhrase] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAccountAddress, setShowAccountAddress] = useState(false);
  const [accountAddress, setAccountAddress] = useState("");
  const [inputSeed, setInputSeed] = useState("");
  const [isErrorValidSeed, setErrorValidSeed] = useState(false);

  const generateSeedPhrase = () => {
    const mnemonic = mnemonicGenerate();
    setSeedPhrase(mnemonic);
    setShowConfirmation(false);
  };

  const handleConfirmation = () => {
    setShowConfirmation(true);
    const account = keyring.addFromMnemonic(seedPhrase);
    setAccountAddress(account.address);
  };

  const checkSeed = () => {
    setErrorValidSeed(false);

    if (seedPhrase === inputSeed) {
      setSeedPhrase("");
      setShowAccountAddress(true);
    } else {
      setErrorValidSeed(true);
    }
  };

  const handleGoBack = () => {
    setShowConfirmation(false);
  };

  const renderContent = () => {
    if (showAccountAddress) {
      return <AccountAddress accountAddress={accountAddress} />;
    }

    if (showConfirmation) {
      return (
        <RestoreOrder
          checkSeed={checkSeed}
          setInputSeed={setInputSeed}
          inputSeed={inputSeed}
          isErrorValidSeed={isErrorValidSeed}
          handleGoBack={handleGoBack}
        />
      );
    }

    if (seedPhrase) {
      return (
        <SeedPhrase
          seedPhrase={seedPhrase}
          handleConfirmation={handleConfirmation}
        />
      );
    }

    return <NewAddress generateSeedPhrase={generateSeedPhrase} />;
  };

  return (
    <div className="block">
      <img className="logo" src={Logo} alt="Logo" />
      {renderContent()}
    </div>
  );
}

export default App;
