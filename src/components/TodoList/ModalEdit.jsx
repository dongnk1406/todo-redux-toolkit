import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "./todosSlice";

function ModalEdit(props) {
  const { todoList, idTodoEdit, setOpenModalEdit } = props;
  const dispatch = useDispatch();
  const todoEdit = todoList.find((todo) => todo.id === idTodoEdit);
  const [nameTodoEdit, setNameTodoEdit] = useState(todoEdit.name);
  const [priorityEdit, setPriorityEdit] = useState(todoEdit.priority);

  const handleEditTodo = () => {
    const newTodo = {
      id: idTodoEdit,
      name: nameTodoEdit,
      priority: priorityEdit,
    };
    dispatch(editTodo(newTodo));
    setOpenModalEdit(false);
  };

  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        backgroundColor: "#00000066",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row
        style={{
          width: "350px",
          backgroundColor: "black",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Col span={24}>
          <Input.Group
            style={{ display: "flex", flexDirection: "column" }}
            compact
          >
            <Input
              value={nameTodoEdit}
              placeholder="Enter todo..."
              style={{ margin: "10px 0" }}
              onChange={(e) => setNameTodoEdit(e.target.value)}
            />

            <Select
              value={priorityEdit}
              onChange={(value) => setPriorityEdit(value)}
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

            <Button
              type="primary"
              onClick={handleEditTodo}
              style={{ marginTop: "10px" }}
            >
              Save
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </section>
  );
}

export default ModalEdit;
