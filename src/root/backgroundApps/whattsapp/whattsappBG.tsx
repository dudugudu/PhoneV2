import "./whattsappBG.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/ducks/rootReducer";

function WhattsAppBG(params: string) {
  const WPP = useSelector((state: RootState) => state.reducerWhattsApp);
  return (
    <>
      {WPP.subRouter === "home" ? (
        <div className="whattsapp-topbar"></div>
      ) : WPP.subRouter === "chatprivate" ? (
        <>
          <div className="whattsapp-topbar-group"></div>
          <div className="whattsapp-chat"></div>
        </>
      ) : WPP.subRouter === "chatgroup" ? (
        <div className="whattsapp-topbar-group"></div>
      ) : (
        "error"
      )}
    </>
  );
}
export default WhattsAppBG;
