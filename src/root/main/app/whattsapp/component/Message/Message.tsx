import { MessageTypes } from "interfaces/whattsapp/Message";
import { Icon } from "component/tools/tools";
function Message(props: MessageTypes) {
  const { type, number, text, url } = props;
  let isMy = false;
  switch (type) {
    case "text":
      if (isMy) {
        return (
          <>
            <div className="ext-message-right">
              <span className="tringulo-right"></span>
              <p className="text">{text}</p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="ext-message">
              <span className="ballap"></span>
              <span className="number">{number}</span>
              <p className="text">{text}</p>
            </div>
          </>
        );
      }
    case "image":
      if (isMy) {
        return (
          <>
            <div className="ext-message-right">
              <span className="tringulo-right"></span>
              <img className="img" src="./static/media/walpaper.jpg" alt="" />
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="ext-message">
              <span className="ballap"></span>
              <span className="number"> +55 49 9950-8796</span>
              <img className="img" src="./static/icons/account.png" alt="" />
            </div>
          </>
        );
      }
    case "audio":
      if (isMy) {
        return (
          <>
            <div className="ext-message-right">
              <span className="tringulo-right"></span>

              <div className="int-audio">
                <div className="img-audio"></div>
                <Icon fontSize="30px">play_arrow</Icon>
                <input
                  className="slider"
                  style={{ width: "125px" }}
                  type="range"
                />
              </div>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div className="ext-message">
              <span className="ballap"></span>
              <span className="number"> +55 49 9950-8796</span>
              <div className="int-audio-left">
                <Icon fontSize="30px">play_arrow</Icon>
                <input
                  className="slider slider-left"
                  style={{ width: "115px" }}
                  type="range"
                />
                <div className="img-audio"></div>
              </div>
            </div>
          </>
        );
      }
    case "localization":
      return <></>;
    default:
      return <>Error89</>;
  }
}

export default Message;
