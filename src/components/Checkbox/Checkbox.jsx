import { doneToDo, selectToDo } from "../../app/ToDoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Checkbox({ isCheckboxDisabled, index }) {
  const dispatch = useDispatch();
  const todoState = useSelector(selectToDo);

  const handleCheck = () => {
    dispatch(doneToDo({ index }));
  };

  return (
    <input
      className={`todo__checkbox d-flex me-2 ${
        todoState[index].done ? "todo__checkbox_checked" : ""
      }`}
      type="checkbox"
      checked={todoState[index].done}
      disabled={isCheckboxDisabled}
      onChange={handleCheck}
    />
  );
}
