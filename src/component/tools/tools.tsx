import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { RootState } from "store/ducks/rootReducer";

import {
  IconProps,
  DisplayProps,
  AppIconProps,
  AnimetedAppType,
  BottomNavigationProps,
} from "./toolsType";

import "./tools.css";
import { useEffect, useState } from "react";

function Icon(props: IconProps): JSX.Element {
  const BG_Main = useSelector(
    (state: RootState) => state.reducerStyle.phone_main
  );
  const { children, onClick, outlined, cursor, color, fontSize, rot, margin } =
    props;
  return (
    <>
      <div
        onClick={onClick}
        style={{
          display: "flex",
          cursor: cursor ? "pointer" : "auto",
          fontSize: fontSize ? fontSize : "14px",
          color:
            color === "topbar"
              ? BG_Main.topBar.color
              : color === "viwer"
              ? BG_Main.viwer.color
              : color === "baseboard"
              ? BG_Main.baseboard.color
              : color,
          transform: rot ? `rotate(${rot}deg)` : "0",
          margin: margin ? margin : "0",
        }}
        className={outlined ? "material-icons-outlined" : "material-icons"}
      >
        {children}
      </div>
    </>
  );
}

function Display(props: DisplayProps) {
  const {
    children,
    onClick,
    flexDirection,
    height,
    width,
    alignItem,
    justifyContent,
    margin,
    padding,
    className,
    Bcolor,
  } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          height: height ? height : "100%",
          width: width ? width : "100%",
          flexDirection: flexDirection ? flexDirection : "row",
          alignItems: alignItem ? alignItem : "stretch",
          justifyContent: justifyContent ? justifyContent : "center",
          margin: margin ? margin : "0",
          padding: padding ? padding : "0",
          backgroundColor: Bcolor ? Bcolor : "transparent",
        }}
        className={className}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
function AppIcon(props: AppIconProps) {
  const { onClick, iconName } = props;
  const dispatch = useDispatch();
  function click_position(x: number, y: number) {
    dispatch({
      type: "UPDATED_CLICK_POSITION",
      x: x - (window.innerWidth - 340),
      y: y - (window.innerHeight - 720),
    });
  }
  return (
    <>
      <div
        onMouseDownCapture={(e) => {
          click_position(e.nativeEvent.clientX, e.nativeEvent.clientY);
        }}
        onClick={onClick}
        className="AppIcon background"
        style={{ backgroundImage: `url(./static/icons/${iconName}.png)` }}
      />
    </>
  );
}

function AnimetedApp(props: AnimetedAppType) {
  const { children } = props;
  const [Display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 360);
  }, [children]);

  return (
    <>
      {Display && (
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "305.5px",
            height: "600px",
            overflow: "auto",
            overflowX: "hidden",
            overflowY: "hidden",
            marginLeft: "-1px",
            padding: "0 8px",
          }}
        >
          {children}
        </div>
      )}
    </>
  );
}

function BottomNavigation(props: BottomNavigationProps) {
  const { children, width, active, onClick } = props;
  return (
    <>
      <div
        onClick={onClick}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width ? width : "auto",
        }}
      >
        <div
          className="Botton-Navigation"
          style={{
            color: active === "true" ? "#109e5d" : "#363636",
            borderColor: active === "true" ? "#109e5d" : "#363636",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export { Icon, Display, AppIcon, AnimetedApp, BottomNavigation };
