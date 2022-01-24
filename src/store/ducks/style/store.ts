import { styleState } from "./types";
const INITIAL_STATE: styleState = {
  navigation: "/",
  click_position: {
    x: 0,
    y: 0,
  },
  phone_main: {
    what_app: "phone",
    topBar: { BG_color: "", color: "" },
    viwer: { BG_color: "", color: "" },
    baseboard: { BG_color: "", color: "" },
  },
  open_app: false,
  style_apps: [
    {
      appName: "bank",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "calculator",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "chamados",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "facebook",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "ifood",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "intsagram",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "keypad",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#ffffff", color: "#363636" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#ffffff", color: "#363636" },
        },
      ],
    },
    {
      appName: "whattsapp",
      style: [
        {
          typestyle: "light",
          topBar: { BG_color: "#008069", color: "#F7F8FA" },
          viwer: { BG_color: "#ffffff", color: "#363636" },
          baseboard: { BG_color: "#F7F8FA", color: "#363636" },
        },
      ],
    },
  ],
};

export default INITIAL_STATE;
