import "./chatprivate.css";
import { Icon } from "component/tools/tools";
import Message from "../Message/Message";

function ChatPrivate() {
  return (
    <>
      <div className="topbar-chatprivate">
        <div className="profile"></div>
        <div className="profile-info">
          <p>André</p>
          <span>Visto por ultimo</span>
        </div>
        <div className="tools-profile">
          <Icon fontSize="25px">videocam</Icon>
          <Icon fontSize="22px">call</Icon>
          <Icon fontSize="24px">more_vert</Icon>
        </div>
      </div>

      <div className="chatprivate-mensage">
        <div className="chat">
          <Message type="text" number="+55 49 9950-8796" text="André" />
          <Message type="image" number="+55 49 9950-8796" text="André" />
          <Message type="audio" number="+55 49 9950-8796" text="André" />
          <Message type="text" number="+55 49 9950-8796" text="oi" />
        </div>
        <div className="chatinput">
          <div className="input">
            <Icon color="#8596A0" fontSize="20px">
              emoji_emotions
            </Icon>
            <input style={{ width: "145px" }} type="text" />
            <Icon color="#8596A0" fontSize="20px">
              attach_file
            </Icon>
            <Icon color="#8596A0" fontSize="20px">
              photo_camera
            </Icon>
          </div>
          <div className="audio-btn">
            <Icon color="#ffffff" fontSize="20px">
              mic
            </Icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatPrivate;
