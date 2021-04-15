import React from 'react'
import { isMobile } from 'react-device-detect'

import { Switch, Route } from 'react-router-dom'

import { links } from 'helpers'
import LocalStorage from 'pages/LocalStorage/LocalStorage'
import SwapComponent from 'pages/Swap/Swap'
import TurboSwap from 'pages/TurboSwap/TurboSwap'
import History from 'pages/History/History'
import CreateWallet from 'pages/CreateWallet/CreateWallet'
import NotFound from 'pages/NotFound/NotFound'
import About from 'pages/About/About'
import Wallet from 'pages/Wallet/Wallet'
import Currency from 'pages/Currency/Currency'
import Exchange from 'pages/Exchange/Exchange'
import CurrencyWallet from 'pages/CurrencyWallet/CurrencyWallet'
import Transaction from 'pages/Transaction/Transaction'
import BtcMultisignProcessor from 'pages/Multisign/Btc/Btc'

import Marketmaker from 'pages/Marketmaker/Marketmaker'

import CreateInvoice from 'pages/Invoices/CreateInvoice'
import InvoicesList from 'pages/Invoices/InvoicesList'
import Invoice from 'pages/Invoices/Invoice'

import ScrollToTop from '../components/layout/ScrollToTop/ScrollToTop'
import SaveMnemonicModal from "components/modals/SaveMnemonicModal/SaveMnemonicModal"
import SaveKeysModal from "components/modals/SaveKeysModal/SaveKeysModal"

import RestoryMnemonicWallet from "components/modals/RestoryMnemonicWallet/RestoryMnemonicWallet"


const routes = (
  <ScrollToTop>
    <Switch>
      <Route exact path={`/:page(exit)`} component={Wallet} />

      <Route path={`${links.atomicSwap}/:orderId`} component={SwapComponent} />
      <Route path={`${links.turboSwap}/:orderId`} component={TurboSwap} />

      <Route path={`/:ticker(btc|eth|ghost|next)/tx/:tx?`} component={Transaction} />
      <Route path={`/:token(token)/:ticker/tx/:tx?`} component={Transaction} />

      <Route path={`/:ticker(btc|eth|ghost|next)/:address/:action(receive|send)?`} component={CurrencyWallet} />
      <Route path={`/:token(token)/:ticker/:address`} component={CurrencyWallet} />
      <Route path={`/:token(token)/:ticker/:address/withdraw`} component={CurrencyWallet} />
      <Route path={`/:fullName-wallet/:address?`} component={CurrencyWallet} />

      <Route path={`${links.exchange}/:sell-to-:buy/:linkedOrderId`} component={Exchange} />
      <Route path={`${links.exchange}/:sell-to-:buy`} component={Exchange} />
      <Route path={`${links.exchange}`} component={Exchange} />

      <Route path={`${links.localStorage}`} component={LocalStorage} />
      <Route path={`${links.aboutUs}`} component={About} />

      <Route path={`${links.send}/:currency/:address/:amount`} component={Wallet} />
      <Route path={`${links.wallet}`} component={Wallet} />

      <Route exact path={`${links.createWallet}`} component={CreateWallet} />
      <Route path={`${links.createWallet}/:currency`} component={CreateWallet} />
      <Route path={`${links.restoreWallet}`} component={RestoryMnemonicWallet} />

      <Route path={`${links.multisign}/btc/:action/:data/:peer`} component={BtcMultisignProcessor} />
      <Route path={`${links.multisign}/btc/:action/:data`} component={BtcMultisignProcessor} />

      <Route path={`${links.createInvoice}/:type/:wallet`} component={CreateInvoice} />
      {isMobile && <Route path={`${links.invoices}/:type?/:address?`} component={InvoicesList} />}
      <Route path={`${links.invoice}/:uniqhash?/:doshare?`} component={Invoice} />

      <Route path={`${links.savePrivateSeed}`} component={SaveMnemonicModal} />
      <Route path={`${links.savePrivateKeys}`} component={SaveKeysModal} />

      <Route exact path={`${links.notFound}`} component={NotFound} />
      <Route exact path={`/`} component={Wallet} />
      <Route exact path={`${links.connectWallet}`} component={Wallet} />

      <Route exact path={`${links.marketmaker}`} component={Marketmaker} />
      <Route exact path={`${links.marketmaker_short}`} component={Marketmaker} />

      {/* In desktop mode - the history is shown in the wallet design */}
      {!isMobile && (
        <>
          <Route exact path={`/:page(invoices)/:type?/:address?`} component={Wallet} />
          <Route exact path={`/:page(history)`} component={Wallet} />
        </>
      )}
      {isMobile && (
        <>
          <Route exact path={`${links.history}/(btc)?/:address?`} component={History} />
          <Route exact path={`/:page(invoices)/:type?/:address?`} component={History} />
        </>
      )}
      <Route path={`${links.currencyWallet}`} component={Wallet} />
      <Route path={`/:currency`} component={Currency} />

      <Route component={NotFound} />
    </Switch>
  </ScrollToTop>
)

export default routes
