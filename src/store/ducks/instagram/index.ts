import { AnyAction, Reducer } from "redux";
import instagramTypes from "./types";
import INITIAL_STATE from "./store";

const Instagram: Reducer<instagramTypes> = (
  state = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case "Teste":
      return { ...state, click_position: { x: action.x, y: action.y } };

    default:
      return state;
  }
};

export default Instagram;
