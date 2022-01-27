export default interface cardCoversatioTypes {
  data?: dataConversation;
}
interface dataConversation {
  name?: string;
  imagem?: string;
  visualized?: boolean;
  deleted?: boolean;
  isGruop?: boolean;
  number?: number;
}
/**
 *
 */
export default interface whatsComponentTypes {
  CradConversation?: JSX.Element | JSX.Element[] | any;
}
