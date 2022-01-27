import cardCoversatioTypes from "interfaces/whattsapp/types";
import { Icon } from "component/tools/tools";
import "./card_coversation.css";
function CardConversation(props: cardCoversatioTypes) {
  return (
    <>
      <div className="external-card-conversation">
        <div className="box-image-profile">
          <img
            src="https://i.pinimg.com/originals/66/bf/c5/66bfc551758def865f1367a41bb13ed5.jpg"
            alt=""
          />
        </div>
        <div className="box-informations">
          <div className="line-informations top">
            <p className="name">André</p>
            <label>Ontem</label>
          </div>
          <div className="line-informations">
            <Icon margin="0 5px 0 0" fontSize="14px">
              done_all
            </Icon>
            <Icon margin="0 5px 0 0" fontSize="14px">
              videocam
            </Icon>

            <p>Fala ai andré gayzao</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardConversation;
