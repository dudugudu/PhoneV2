import { useDispatch, useSelector } from "react-redux";
import * as Comp from "component/tools/tools";

import { RootState } from "../../store/ducks/rootReducer";
import App from "./app/app";
import Home from "./home";

function Routers() {
  const dispatch = useDispatch();
  const APP = useSelector((state: RootState) => state.reducerStyle.open_app);
  const MAIN = useSelector((state: RootState) => state.reducerStyle.phone_main);

  function WhatPage(name: string) {
    switch (name) {
      case "bank":
        return <App.Bank />;
      case "calculator":
        return <App.Calculator />;
      case "chamados":
        return <App.Chamados />;
      case "facebook":
        return <App.Facebook />;
      case "ifood":
        return <App.Ifood />;
      case "instagram":
        return <App.Instagram />;

      case "keypad":
        return <App.KeyPad />;
      case "whattsapp":
        return <App.WhattsApp />;
      default:
        return <></>;
    }
    // eslint-disable-next-line no-unreachable
    return <></>;
  }

  function CloseApp() {
    dispatch({
      type: "UPDATED_PHONE_MAIN",
      what_app: "home",
      topBar: {
        BG_color: "transparent",
        color: "#fff",
      },
      viwer: {
        BG_color: "transparent",
        color: "#fff",
      },
      baseboard: {
        BG_color: "transparent",
        color: "#fff",
      },
    });
    dispatch({ type: "OPEN_APP", state: false });
  }

  return (
    <>
      <div className="Top-Bar-Main">
        <Comp.Display width="50%"></Comp.Display>
        <Comp.Display
          width="50%"
          alignItem="center"
          justifyContent="right"
          padding="0 15px 0 0"
        >
          <Comp.Icon color="topbar" margin="0 2px ">
            signal_cellular_4_bar
          </Comp.Icon>
          <Comp.Icon color="topbar" margin="0 2px ">
            battery_full
          </Comp.Icon>
        </Comp.Display>
      </div>
      <div className="Viwer-Access-Full">
        {APP && MAIN.what_app !== "" ? WhatPage(MAIN.what_app) : <Home />}
      </div>
      <div className="Rodape-Maind">
        <Comp.Display
          width="100%"
          justifyContent="space-evenly"
          alignItem="center"
        >
          <Comp.Icon
            onClick={() => {
              CloseApp();
            }}
            fontSize="26px"
            cursor
            color="baseboard"
          >
            chevron_left
          </Comp.Icon>
          <Comp.Icon
            onClick={() => {
              CloseApp();
            }}
            fontSize="20px"
            cursor
            color="baseboard"
          >
            crop_square
          </Comp.Icon>
          <Comp.Icon color="baseboard" fontSize="19px" rot="90" cursor>
            menu
          </Comp.Icon>
        </Comp.Display>
      </div>
    </>
  );
}
export default Routers;
