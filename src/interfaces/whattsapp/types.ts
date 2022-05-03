interface Main {
  children?: JSX.Element | JSX.Element[] | string;
  onClick?: any;
  className?: string | any;
  onChange?: any;
  onKeyUp?: any;
  onKeyDown?: any;
}

export default interface dataConversation extends Main {
  name?: string;
  numeros?: string;
  lastMessage?: string;
  typeMessage?: string;
  isGroup?: boolean;
  time?: number;
  deleted?: boolean;
  visualized?: boolean;
  recived?: boolean;
}

/**
 *
 */
export default interface whatsComponentTypes {
  CradConversation?: JSX.Element | JSX.Element[] | any;
}
