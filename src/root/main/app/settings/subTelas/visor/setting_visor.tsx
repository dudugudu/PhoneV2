import "./setting_visor.css";
import { Icon } from "component/tools/tools";
function Visor() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "5px 5px 0 5px",
          }}
        >
          <Icon fontSize="16px">arrow_back_ios</Icon>
          <p style={{ lineHeight: "14px" }}>Visor</p>
        </div>
        <div className="config-card-visor">
          <div className="visor-option">
            <div
              className="img"
              style={{
                backgroundImage: `url(./static/systemaIcon/claro.svg)`,
              }}
            ></div>
            <p>Claro</p>
            <input type="radio" />
          </div>
          <div className="visor-option">
            <div
              className="img"
              style={{
                backgroundImage: `url(./static/systemaIcon/escuro.svg)`,
              }}
            ></div>
            <p>Escuro</p>
            <input type="radio" />
          </div>
        </div>

        <div className="config-card">
          <div className="image"></div>
          <div className="info" style={{ marginLeft: "5px" }}>
            <h1>Zoom da tela</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visor;
