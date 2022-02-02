import { AnyAction, Reducer } from "redux";
import whattsappTypes from "./types";
import INITIAL_STATE from "./store";

const WhattsApp: Reducer<whattsappTypes> = (
  state = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "UPDATE_CONVERSAS":
      return { ...state, conversas: action.data };

    default:
      return state;
  }
};

export default WhattsApp;
