import "./list.css";
import { itemObj } from "../types";
import Item from "./item";
import AddItem from "./addItem";
import AddButton from "./addButton";
import { useEffect, useState } from "react";

// import { Item } from "./item";

interface listProps {
  initItems?: itemObj[];
  listName: string;
}
// const fauxItems: itemObj[] = [{ name: "helen", done: false }];
const List: React.FC<listProps> = ({ initItems, listName }) => {
  const [items, setItems] = useState(initItems);
  const [addingItem, setAddingItem] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const addNewItemHandler = () => {
    setAddingItem(!addingItem);
    if (!addingItem && name != "") {
      let newItem: itemObj = { name: name, additionalInfo: desc, done: false };
      if (items) {
        setItems([...items, newItem]);
      } else {
        setItems([newItem]);
      }
    }
  };
  useEffect(() => {}, [items]);

  return (
    <div className="list">
      <header className="header">{listName}</header>
      {items ? items.map((i) => <Item item={i} />) : <div>No items yet</div>}
      {!addingItem ? (
        <AddButton onClick={addNewItemHandler} />
      ) : (
        <AddItem
          setName={setName}
          setDesc={setDesc}
          onButtonClick={addNewItemHandler}
        />
      )}
    </div>
  );
};

export default List;
