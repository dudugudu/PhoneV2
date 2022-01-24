import KeyPad from "./keypad/keypad";
import WhattsApp from "./whattsapp/whattsapp";
import Bank from "./bank/bank";
import Calculator from "./calculator/calculator";
import Chamados from "./chamados/chamados";
import Facebook from "./facebook/facebook";
import Ifood from "./ifood/ifood";
import Instagram from "./instagram/instagram";

import AppType from "./appTypes";
const App: AppType = {};
/**
 *
 */
App.Bank = Bank;
App.Calculator = Calculator;
App.Chamados = Chamados;
App.Facebook = Facebook;
App.Ifood = Ifood;
App.Instagram = Instagram;
App.KeyPad = KeyPad;
App.WhattsApp = WhattsApp;
/**
 *
 */
export default App;
