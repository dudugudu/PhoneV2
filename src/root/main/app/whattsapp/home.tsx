import { Icon } from "../../../../component/tools/tools";
import { useDispatch, useSelector } from "react-redux";
import * as Wpp from "./component";
import { RootState } from "../../../../store/ducks/rootReducer";
function HomeWPP() {
  const dispatch = useDispatch();
  const WPP = useSelector((state: RootState) => state.reducerWhattsApp);
  function Abrir(whatSubRouter: string) {
    dispatch({
      type: "UPDATE_SUBROUTER",
      subRouter: whatSubRouter,
    });
  }
  return (
    <>
      <div className="topbar">
        <div className="line name">WhattsApp</div>
        <div className="line option">
          <Icon margin="0 0 0 5px" fontSize="18px">
            photo_camera
          </Icon>
          <p>COVERSAS</p>
          <p>
            STATUS
            <span
              style={{
                display: "flex",
                margin: "0 0 0 5px",
                width: "5px",
                height: "5px",
                backgroundColor: "#fff",
                borderRadius: "50%",
                marginTop: "-5px",
              }}
            ></span>
          </p>
          <p>CHAMADAS</p>
        </div>
      </div>
      <div className="viwer-convesation">
        {WPP.conversas?.map((obj) => {
          return (
            <Wpp.CardConversation
              name={obj.name}
              numeros={obj.numeros}
              lastMessage={obj.lastMessage}
              isGroup={obj.isGroup}
              typeMessage={obj.typeMessage}
              visualized={obj.visualized}
              deleted={obj.deleted}
              recived={obj.recived}
              time={obj.time}
              onClick={() => Abrir("chatprivate")}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomeWPP;
