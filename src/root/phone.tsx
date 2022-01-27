import "./phone.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/ducks/rootReducer";
import Routers from "./main/routes";

import BgApp from "./backgroundApps/BgApp";

function RootPhone() {
  const BG_Main = useSelector(
    (state: RootState) => state.reducerStyle.phone_main
  );
  const MAIN = useSelector((state: RootState) => state.reducerStyle.phone_main);
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app);
  const PS = useSelector(
    (state: RootState) => state.reducerStyle.click_position
  );
  function WhatPage(name: string) {
    switch (name) {
      case "whattsapp":
        console.log("Chamando");

        return <BgApp.WhattsAppBG />;
      default:
        return <></>;
    }
    // eslint-disable-next-line no-unreachable
    return <></>;
  }

  return (
    <>
      <div className="S20 background">
        <div
          className="Background-Main background"
          style={{ backgroundImage: "url(/static/media/walpaper.jpg)" }}
        ></div>
        <div
          className="Background-App"
          style={{
            width: APP ? "" : "0",
            height: APP ? "" : "0",
            animation: APP ? "open .4s  1" : "close 300ms  1",
            transitionDuration: ".3s",
          }}
        >
          <div
            style={{
              backgroundColor: BG_Main.topBar.BG_color,
              color: BG_Main.topBar.color,
            }}
            className="Topbar"
          ></div>
          <div
            style={{
              backgroundColor: BG_Main.viwer.BG_color,
              color: BG_Main.viwer.color,
            }}
            className="Viwer"
          >
            {APP && MAIN.what_app !== "" ? (
              WhatPage(MAIN.what_app)
            ) : (
              <>deu ruim</>
            )}
          </div>
          <div
            style={{
              backgroundColor: BG_Main.baseboard.BG_color,
              color: BG_Main.baseboard.color,
            }}
            className="Baseboard"
          ></div>
        </div>
        <style>{`
        @keyframes open {
          0% { 
            left:${PS.x}px;
            top:${PS.y}px;
            width:10px;
            height:22px;
          }
          100% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
        }
        @keyframes close {
          0% { 
            left:0px;
            top:0px;
            width:305.5px;
            height:669px;
          }
          70%{
            opacity: 1
            
          }
          85%{
            width:22px;
            height:22px;
            left:${PS.x}px;
            top:${PS.y}px;
          }
          100% { 
           
            opacity: 0.2
          }
        }
      `}</style>
        <div className="Background-All-App"></div>
        <div className="Background-Viwer-Access">
          <div
            className="Viwer-Access-Interno"
            style={{
              color: BG_Main.viwer.color,
            }}
          >
            <Routers />
          </div>
        </div>
      </div>
    </>
  );
}

export { RootPhone };

//import { useSelector } from 'react-redux'
//import { RootState }  from './store/ducks/rootReducer'
//const Background = useSelector((state: RootState) => state.reducerStyle.bg_Main)
//console.log(Background);
