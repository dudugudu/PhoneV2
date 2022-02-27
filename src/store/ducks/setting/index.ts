import { AnyAction, Reducer } from "redux";
import { settingTypes } from "./settingTypes";
import SETTING_INITIAL_STATE from "./store";

const Setting: Reducer<settingTypes> = (
  state = SETTING_INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "UPDATED_CONTACT":
      return { ...state, contacts: action.contact };
    case "UPDATE_SETTING":
      return { ...state, setting: { theme: "dark", number: "97" } };

    default:
      return state;
  }
};

export default Setting;
