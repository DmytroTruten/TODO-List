import { useState } from "react";
import { DoneToDo } from "../../app/ToDoSlice";
import { useDispatch } from "react-redux";

export default function Checkbox({isDisabled, index}) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setIsChecked(prev => !prev);
    dispatch(DoneToDo({index}))
  }

  return (
    <input
      className={`todo__checkbox d-flex me-2 ${
        isChecked ? "todo__checkbox_checked" : ""
      }`}
      type="checkbox"
      checked={isChecked}
      disabled={isDisabled}
      onChange={handleCheck}
    />
  );
}
