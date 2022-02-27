import { combineReducers } from "redux";
import Instagram from "./instagram";
import WhattsApp from "./whattsapp";
import Setting from "./setting";
import Style from "./style";

export const rootReducer = combineReducers({
  reducerStyle: Style,
  reducerInstagram: Instagram,
  reducerWhattsApp: WhattsApp,
  reducerSettings: Setting,
});

export type RootState = ReturnType<typeof rootReducer>;
