import { ModalSettings } from "../settingsModal";

function Inicial() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="config-top-bar">Config.</div>
      <div className="config-card">
        <div className="info">
          <h1>Eduardo Gustavo da Silva Rodrigues</h1>
          <p>eduardo_gustavo@estudante.sc.senai.br</p>
        </div>
        <div className="image">
          <div
            className="img-profile"
            style={{ backgroundImage: `url(./static/systemaIcon/user.svg)` }}
          ></div>
        </div>
      </div>
      {ModalSettings.map((obj) => {
        return (
          <div className="config-card">
            <div className="image">
              <div
                className="img"
                style={{
                  backgroundImage: `url(./static/systemaIcon/${obj.Img})`,
                }}
              ></div>
            </div>
            <div className="info" style={{ marginLeft: "5px" }}>
              <h1>{obj.Name}</h1>
              <p>{obj.Descption}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Inicial;
