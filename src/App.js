import './App.css'
import React, {useState, useEffect} from 'react'

import { Agenda, Login } from '@microsoft/mgt-react'
import {Providers, ProviderState} from '@microsoft/mgt-element'

function useIsSignedIn(){
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}

function App() {

  const [isSignedIn] = useIsSignedIn();

  return (
    <div className="App">
      <header className="App-header">
        <Login className="login-btn" />
        Ciao <strong>ICTPower</strong> Community!
        <div>
          {isSignedIn &&
            <Agenda />}
        </div>
      </header>
    </div>
  );
}

export default App