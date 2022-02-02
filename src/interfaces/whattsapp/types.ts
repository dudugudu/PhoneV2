export default interface dataConversation {
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
