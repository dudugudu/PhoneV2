import { AnimetedApp } from "../../../../component/tools/tools";
import { Icon } from "../../../../component/tools/tools";
import Wpp from "./component";
import "./whattsapp.css";

function WhattsApp(params: string) {
  return (
    <>
      <AnimetedApp>
        <div className="whattsapp-main">
          <div className="topbar">
            <div className="line name">WhattsApp</div>
            <div className="line option">
              <Icon margin="0 0 0 5px" fontSize="18px">
                photo_camera
              </Icon>
              <p>COVERSAS</p>
              <p>
                STATUS
                <span style={{ margin: "0 0 0 5px" }}>*</span>
              </p>
              <p>CHAMADAS</p>
            </div>
          </div>
          <div className="viwer-convesation">
            <Wpp.CradConversation />
          </div>
        </div>
      </AnimetedApp>
    </>
  );
}
export default WhattsApp;
