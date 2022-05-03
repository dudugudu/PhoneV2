import { AnimetedApp } from "../../../../component/tools/tools";
import { Icon } from "../../../../component/tools/tools";
import * as Wpp from "./component";
import "./whattsapp.css";
import HomeWPP from "./home";
import ChatPrivate from "./component/chatprivate/chatprivate";
import ChatGroup from "./component/chatgroup/chatgroup";
import { RootState } from "../../../../store/ducks/rootReducer";

import { useDispatch, useSelector } from "react-redux";
function WhattsApp(params: string) {
  const WPP = useSelector((state: RootState) => state.reducerWhattsApp);

  const dispatch = useDispatch();
  return (
    <>
      <AnimetedApp>
        <div className="whattsapp-main">
          {WPP.subRouter === "home" ? (
            <HomeWPP />
          ) : WPP.subRouter === "chatprivate" ? (
            <ChatPrivate />
          ) : WPP.subRouter === "chatgroup" ? (
            <ChatGroup />
          ) : (
            "error"
          )}
        </div>
      </AnimetedApp>
    </>
  );
}
export default WhattsApp;
