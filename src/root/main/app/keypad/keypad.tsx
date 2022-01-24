import { useState } from "react";
import {
  AnimetedApp,
  Icon,
  BottomNavigation,
} from "../../../../component/tools/tools";
import { Discagem } from "./component/discagem";
import { Contatos } from "./component/tools";

import "./KeyPad.css";

import { useTranslation } from "react-i18next";

function KeyPad() {
  const { t: translate } = useTranslation();
  const [InFocus, setInFocus] = useState(false);
  const [WhatPage, setWhatPage] = useState("teclado");

  return (
    <>
      <AnimetedApp>
        <div className="box-keypad">
          <div className="keypad-topbar">
            <p>{translate("TELEFONE")}</p>
            <Icon fontSize="20x" color="black" cursor>
              add
            </Icon>
          </div>
          <div
            className="keypad-contatos"
            onClick={() => {
              setInFocus(true);
            }}
            style={{
              height: InFocus ? "540px" : "130px",
              transitionDuration: InFocus ? "2s" : "0",
            }}
          >
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
            <Contatos />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: InFocus ? "0px" : "410px",
              transitionDuration: InFocus ? "2s" : "0",
              overflow: "auto",
              overflowY: "hidden",
              overflowX: "hidden",
            }}
          >
            <Discagem />
          </div>
          <div className="keypad-rodape">
            {InFocus ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#15b76d",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setInFocus(false);
                }}
              >
                <Icon cursor color="#ffffff">
                  dialpad
                </Icon>
              </div>
            ) : (
              <>
                <BottomNavigation
                  onClick={() => {
                    setWhatPage("teclado");
                  }}
                  active={WhatPage === "teclado" ? "true" : "false"}
                  width="60px"
                >
                  {translate("TECLADO")}
                </BottomNavigation>
                <BottomNavigation
                  onClick={() => {
                    setWhatPage("recentes");
                  }}
                  active={WhatPage === "recentes" ? "true" : "false"}
                  width="60px"
                >
                  {translate("RECENTES")}
                </BottomNavigation>
                <BottomNavigation
                  onClick={() => {
                    setWhatPage("contatos");
                  }}
                  active={WhatPage === "contatos" ? "true" : "false"}
                  width="60px"
                >
                  {translate("CONTATOS")}
                </BottomNavigation>
              </>
            )}
          </div>
        </div>
      </AnimetedApp>
    </>
  );
}

export default KeyPad;
