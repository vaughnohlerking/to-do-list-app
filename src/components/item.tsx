import "./item.css";
import { itemObj } from "../types";
import { useState } from "react";

interface itemProps {
  item: itemObj;
}
const Item: React.FC<itemProps> = ({ item }) => {
  const [complete, setComplete] = useState(item.done);
  const onClickHandler = () => {
    setComplete(!complete);
  };
  return (
    <div className="item-body">
      <div style={{ display: "inline-flex" }}>
        <div className="check-box" onClick={onClickHandler}>
          <div
            className="check"
            style={{ backgroundColor: complete ? "black" : "aqua" }}
          ></div>
        </div>
        <div
          className="item-name"
          style={{ color: complete ? "lightgreen" : "white" }}
        >
          {item.name}
        </div>
        {item.created && (
          <div className="item-date">{item.created.toDateString()}</div>
        )}
      </div>

      <div className="item-additional-info">{item.additionalInfo}</div>
    </div>
  );
};

export default Item;
