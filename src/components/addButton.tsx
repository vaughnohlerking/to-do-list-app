import "./addButton.css";

interface buttonProps {
  onClick: React.MouseEventHandler;
  //   item: itemObj;
}
const AddButton: React.FC<buttonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button-body">
      Add new item
    </button>
  );
};

export default AddButton;
