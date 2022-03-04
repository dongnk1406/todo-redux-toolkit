import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { addTodo } from "./todosSlice";
import { todosRemainingSelector } from "../../redux/selector";
import ModalEdit from "./ModalEdit";

function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [idTodoEdit, setIdTodoEdit] = useState(undefined);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const todoList = useSelector(todosRemainingSelector);
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <>
      <Row style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        <Col
          span={24}
          style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
        >
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
              setIdTodoEdit={setIdTodoEdit}
              setOpenModalEdit={setOpenModalEdit}
            />
          ))}
        </Col>
        <Col span={24}>
          <Input.Group style={{ display: "flex" }} compact>
            <Input
              value={todoName}
              placeholder="Enter todo..."
              onChange={(e) => handleInputChange(e)}
            />
            <Select
              defaultValue="Medium"
              value={priority}
              onChange={handlePriorityChange}
            >
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="green">Low</Tag>
              </Select.Option>
            </Select>
            <Button type="primary" onClick={() => handleAddButtonClick()}>
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
      {openModalEdit && (
        <ModalEdit
          todoList={todoList}
          idTodoEdit={idTodoEdit}
          setOpenModalEdit={setOpenModalEdit}
        />
      )}
    </>
  );
}

export default TodoList;
