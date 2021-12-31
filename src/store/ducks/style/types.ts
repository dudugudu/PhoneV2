/**
 * Action types
 */
export enum styleTypes{
  UPDATED_BACKGROUND = '@style/UPDATED_BACKGROUND',
  UPDATED_NAVIGATION = '@style/UPDATED_NAVIGATION',
  UPDATED_STYLE_KEYPAD_RODAPE = '@style/UPDATED_STYLE_KEYPAD_RODAPE',
  UPDATED_STYLE_TRASITION_KAYPAD = '@style/UPDATED_STYLE_TRASITION_KAYPAD'
} 

/**
 * Data types
 */
export interface bg_Main{
    backgroundColor:string,
    backgroundImage:string,
    Matte:string,
    color:string
}
export interface trans_Keypad{
    duration: string,
    heightKeypad:string,
    heightSerch:string,
    heightOverflow:string,
}
export interface keypad_Rodape{
    display:string,
    position:string,
    active:string,
}


/**
 * State types
 */
export interface styleState{
    bg_Main: bg_Main,
    trans_Keypad: trans_Keypad,
    keypad_Rodape: keypad_Rodape,
    navigation?:string
}