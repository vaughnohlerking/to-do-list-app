import { SetStateAction, useState } from "react";
import "./addItem.css";

interface buttonProps {
  onButtonClick: any;
  setName: React.Dispatch<SetStateAction<string>>;
  setDesc: React.Dispatch<SetStateAction<string>>;
  //   item: itemObj;
}
const AddItem: React.FC<buttonProps> = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };
  const onClickHandler = () => {
    props.setName(name);
    props.setDesc(desc);
    props.onButtonClick();
  };
  return (
    <div className="body">
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Description (optional):
        <input type="text" value={desc} onChange={handleDescChange} />
      </label>
      <button onClick={onClickHandler}>Enter</button>
    </div>
  );
};

export default AddItem;
