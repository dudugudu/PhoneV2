import { combineReducers } from "redux";
import Instagram from "./instagram";
import WhattsApp from "./whattsapp";
import Style from "./style";

export const rootReducer = combineReducers({
  reducerStyle: Style,
  reducerInstagram: Instagram,
  reducerWhattsApp: WhattsApp,
});

export type RootState = ReturnType<typeof rootReducer>;
