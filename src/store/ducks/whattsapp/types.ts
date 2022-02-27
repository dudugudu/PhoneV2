/**
 * Data types
 */
interface conversaTemporaria {
  type?: string;
  mensagem?: string | number | any;
  time?: number;
  deleted?: boolean;
  visualized?: boolean;
}

interface conversas {
  chat_id: number;
  name?: string;
  numeros?: string;
  lastMessage?: string;
  isGroup?: boolean;
  typeMessage?: string;
  time?: number;
  deleted?: boolean;
  visualized?: boolean;
  recived?: boolean;
}
interface style {
  whatApp?: string;
}
/**
 * State types
 */
export default interface whattsappTypes {
  appName: string;
  conversaTemporaria?: conversaTemporaria[];
  conversas?: conversas[];
  style: style;
}
