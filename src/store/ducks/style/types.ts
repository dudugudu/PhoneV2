/**
 * Data types
 */
export interface phone_main {
  what_app: string;
  topBar: templateViwerTypes;
  viwer: templateViwerTypes;
  baseboard: templateViwerTypes;
}
export interface click_position {
  x: number;
  y: number;
}

export interface templateViwerTypes {
  BG_color: string;
  color: string;
}

interface style {
  typestyle: string;
  topBar: templateViwerTypes;
  viwer: templateViwerTypes;
  baseboard: templateViwerTypes;
}

export interface style_apps {
  appName: string;
  style: style[];
}

/**
 * State types
 */
export interface styleState {
  navigation: string;
  click_position: click_position;
  phone_main: phone_main;
  open_app: boolean;
  style_apps: style_apps[];
}
