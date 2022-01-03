/**
 * Data types
 */
export interface phone_main{
    what_app:string;
    color:string
    bg_app:string
}
export interface click_position{
    x:number,
    y:number,
}


export interface style_apps{
    appName:string,
    bg_color:string,
    color:string,
}



/**
 * State types
 */
export interface styleState{
    navigation:string,
    click_position: click_position,
    phone_main:phone_main,
    open_app:boolean
    style_apps: style_apps[]
}