import { AnimetedApp } from "component/tools/tools";
import Inicial from "./subTelas/config_inicial";
import Visor from "./subTelas/visor/setting_visor";
import "./settings.css";
import { useState } from "react";
function Settings() {
  const [WhatViwer, setWhatViwer] = useState("incial");
  return (
    <AnimetedApp>
      {WhatViwer === "incial" ? <Inicial /> : <Visor />}
    </AnimetedApp>
  );
}

export default Settings;
