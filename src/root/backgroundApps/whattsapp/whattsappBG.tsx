import "./whattsappBG.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/ducks/rootReducer";

function WhattsAppBG(params: string) {
  const WPP = useSelector((state: RootState) => state.reducerWhattsApp);
  return (
    <>
      {WPP.style.whatApp === "home" ? (
        <div className="whattsapp-topbar"></div>
      ) : WPP.style.whatApp === "chatprivate" ? (
        <>
          <div className="whattsapp-topbar-group"></div>
          <div className="whattsapp-chat"></div>
        </>
      ) : WPP.style.whatApp === "chatgroup" ? (
        <div className="whattsapp-topbar-group"></div>
      ) : (
        "error"
      )}
    </>
  );
}
export default WhattsAppBG;
