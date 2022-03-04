import { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Tag, Checkbox, Button } from "antd";
import { deleteTodo, toggleTodoStatus } from "../TodoList/todosSlice";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "green",
};

function Todo({
  name,
  priority,
  completed,
  id,
  setIdTodoEdit,
  setOpenModalEdit,
}) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(toggleTodoStatus(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: "10px",
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <div>
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
        <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
          {priority}
        </Tag>
      </div>
      <div>
        <Button
          type="primary"
          style={{ marginRight: "10px" }}
          onClick={() => {
            setIdTodoEdit(id);
            setOpenModalEdit(true);
          }}
        >
          Edit
        </Button>
        <Button type="danger" onClick={handleDeleteTodo}>
          Delete
        </Button>
      </div>
    </Row>
  );
}

export default Todo;
