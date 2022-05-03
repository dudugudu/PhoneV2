import dataConversation from "interfaces/whattsapp/types";
import { Icon } from "component/tools/tools";
import "./card_coversation.css";
function CardConversation(props: dataConversation): JSX.Element {
  const {
    name,
    numeros,
    lastMessage,
    isGroup,
    typeMessage,
    time,
    visualized,
    recived,
    onClick,
  } = props;

  return (
    <>
      <div className="external-card-conversation" onClick={onClick}>
        <div
          className="box-image-profile pointer"
          onClick={() => {
            console.log("perfil");
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/693519401999269949/936714333243707482/pp.jpg"
            alt=""
          />
        </div>
        <div
          className="box-informations pointer"
          onClick={() => {
            console.log("abiri conversa");
          }}
        >
          <div className="line-informations top">
            <p className="name">{name}</p>
            <label>{FormatDate(time ? time : 0)}</label>
          </div>
          <div className="line-informations">
            <Icon
              margin={typeMessage === "text" ? "0 1px 0 0" : "0 3px 0 0"}
              fontSize="14px"
              color={visualized ? "#0DAFF1" : ""}
            >
              {recived ? "done_all" : "done"}
            </Icon>

            <Icon margin="0 3px 0 0" fontSize="14px">
              {typeMessage === "video"
                ? "videocam"
                : typeMessage === "image"
                ? "image"
                : ""}
            </Icon>
            <p>{lastMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function FormatDate(date: number) {
  const TL = Date.now();
  const diff = TL - date;
  const longDate = new Date(date);

  if (diff <= 12 * 3600000) {
    const houras =
      longDate.getHours() <= 9
        ? "0" + longDate.getHours()
        : longDate.getHours();
    const minutos =
      longDate.getMinutes() <= 9
        ? "0" + longDate.getMinutes()
        : longDate.getMinutes();

    return houras + ":" + minutos;
  }
  if (diff > 12 * 3600000 && diff < 24 * 3600000) return `Otem`;

  if (diff > 24 * 3600000) {
    const dia =
      longDate.getDate() <= 9 ? "0" + longDate.getDate() : longDate.getDate();
    const mes =
      longDate.getMonth() + 1 <= 9
        ? "0" + (longDate.getMonth() + 1)
        : longDate.getMonth() + 1;
    const ano = longDate.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }
}
export default CardConversation;
