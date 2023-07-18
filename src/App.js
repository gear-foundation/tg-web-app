import './App.css';
import { Keyring } from '@polkadot/api';
import { mnemonicGenerate } from '@polkadot/util-crypto';
import React, { useState } from 'react';

//const tg = window.Telegram.WebApp;

function App() {
  const keyring = new Keyring();
  const [seedPhrase, setSeedPhrase] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [accountAddress, setAccountAddress] = useState('');

  const generateSeedPhrase = () => {
    const mnemonic = mnemonicGenerate();
    setSeedPhrase(mnemonic);
    setShowConfirmation(false);
  }

  const handleConfirmation = () => {
    setShowConfirmation(true);
    const account = keyring.addFromMnemonic(seedPhrase);
    setAccountAddress(account.address);
    setSeedPhrase('');
  }

  return (
    <div className="App">
      {showConfirmation ? (
        <div>
          <p>
            Send your substrate address to the bot:
            <br />
            {accountAddress}
          </p>
        </div>
      ) : (
        <div>
          {seedPhrase ? (
            <div>
              {seedPhrase}
              <button type="button" onClick={handleConfirmation} style={{ display: 'block', marginTop: '10px' }}>
                Click, if you have saved the seed phrase
              </button>
            </div>
          ) : (
            <button type="button" onClick={generateSeedPhrase}>Сlick to generate a seed phrase</button>
          )}
        </div>
      )}
    </div>
  );
  
}

export default App;
