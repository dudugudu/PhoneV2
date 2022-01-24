import { AnyAction, Reducer } from "redux";
import { styleState } from "./types";
const INITIAL_STATE: styleState = {
  navigation: "/",
  click_position: {
    x: 0,
    y: 0,
  },
  phone_main: {
    what_app: "phone",
    topBar: { BG_color: "", color: "" },
    viwer: { BG_color: "", color: "" },
    baseboard: { BG_color: "", color: "" },
  },
  open_app: false,
  style_apps: [
    {
      appName: "keypad",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
  ],
};

const Style: Reducer<styleState> = (
  state = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "UPDATED_CLICK_POSITION":
      return { ...state, click_position: { x: action.x, y: action.y } };
    case "OPEN_APP":
      return { ...state, open_app: action.state };
    case "UPDATED_NAVIGATION":
      return { ...state, navigation: action.navigation };
    case "UPDATED_PHONE_MAIN":
      return {
        ...state,
        phone_main: {
          what_app: action.what_app,
          topBar: {
            BG_color: action.topBar.BG_color,
            color: action.topBar.color,
          },
          viwer: { BG_color: action.viwer.BG_color, color: action.viwer.color },
          baseboard: {
            BG_color: action.baseboard.BG_color,
            color: action.baseboard.color,
          },
        },
      };

    default:
      return state;
  }
};

export default Style;
