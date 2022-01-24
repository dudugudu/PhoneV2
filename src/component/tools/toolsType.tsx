interface Main {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: any;
  className?: string | any;
  onChange?: any;
  onKeyUp?: any;
  onKeyDown?: any;
}

export interface IconProps extends Main {
  fontSize?: string;
  color?: string;
  rot?: string;
  margin?: string;
  cursor?: boolean;
  outlined?: boolean;
}
export interface DisplayProps extends Main {
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItem?: string;
  flexDirection?: string | any;
  margin?: string;
  padding?: string;
  Bcolor?: string;
}

export interface AppIconProps extends Main {
  iconName?: string;
}

export interface AnimetedAppType extends Main {}
export interface BottomNavigationProps extends Main {
  width?: string;
  active?: any;
}
