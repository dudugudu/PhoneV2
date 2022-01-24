import { useSelector, useDispatch } from "react-redux";
import { Display, AppIcon } from "../../component/tools/tools";

import { RootState } from "../../store/ducks/rootReducer";

function Home() {
  const dispatch = useDispatch();
  const APPSTYLE = useSelector(
    (state: RootState) => state.reducerStyle.style_apps
  );

  function OpenApp(name: string) {
    APPSTYLE.map((obj) => {
      if (obj.appName === name) {
        obj.style.map((theme) => {
          if (theme.typestyle === "light") {
            dispatch({
              type: "UPDATED_PHONE_MAIN",
              what_app: name,
              topBar: {
                BG_color: theme.topBar.BG_color,
                color: theme.topBar.color,
              },
              viwer: {
                BG_color: theme.viwer.BG_color,
                color: theme.viwer.color,
              },
              baseboard: {
                BG_color: theme.baseboard.BG_color,
                color: theme.baseboard.color,
              },
            });
            dispatch({ type: "OPEN_APP", state: true });
          }
          return null;
        });
      }
      return null;
    });
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display
          justifyContent="space-evenly"
          alignItem="center"
          height="80px"
        ></Display>
        <Display justifyContent="space-evenly" alignItem="center" height="35px">
          <AppIcon
            onClick={() => {
              OpenApp("facebook");
            }}
            iconName="facebook"
          />
          <AppIcon
            onClick={() => {
              OpenApp("whattsapp");
            }}
            iconName="whattsapp"
          />
          <AppIcon
            onClick={() => {
              OpenApp("instagram");
            }}
            iconName="instagram"
          />
          <AppIcon
            onClick={() => {
              OpenApp("settings");
            }}
            iconName="settings"
          />
        </Display>
        <Display justifyContent="space-evenly" alignItem="center" height="80px">
          <AppIcon
            onClick={() => {
              OpenApp("keypad");
            }}
            iconName="phone"
          />
          <AppIcon
            onClick={() => {
              OpenApp("call");
            }}
            iconName="calendar"
          />
          <AppIcon iconName="camera" />
          <AppIcon iconName="apps" />
        </Display>
      </div>
    </>
  );
}
export { Home };
