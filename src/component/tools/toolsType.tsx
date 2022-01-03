interface Main{
  children?:JSX.Element| JSX.Element[]| string;
  onClick?: any;
  className?: string | any;
  onChange?: any; 
  onKeyUp?: any;  
  onKeyDown?: any; 
}

export interface IconProps{
  children?:JSX.Element| JSX.Element[]| string;
  onClick?: any;
  fontSize?: string ;
  color?: string ;
  rot?:string;
  cursor?: boolean;
  outlined?: boolean;
}
export interface DisplayProps{
  children?:JSX.Element| JSX.Element[]| string;
  onClick?:any;
  className?:string;
  width?:string; 
  height?:string; 
  justifyContent?:string;
  alignItem?:string;
  flexDirection?:string|any;
  margin?:string;
  padding?:string;
  Bcolor?:string; 
}

export interface AppIconProps{
  children?:JSX.Element| JSX.Element[]| string;
  onClick?:any;
  iconName?:string;
}
