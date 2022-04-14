import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Providers } from '@microsoft/mgt-element'
import { Msal2Provider } from '@microsoft/mgt-msal2-provider'

const config = {
  clientId: 'your-client-id',
  tenant: 'your-tenant-id',
}

Providers.globalProvider = new Msal2Provider({
  clientId: config.clientId,
  authority: `https://login.microsoftonline.com/${config.tenant}`,
  scopes: ['calendars.read', 'user.read', 'openid', 'profile', 'people.read', 'user.readbasic.all']
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)