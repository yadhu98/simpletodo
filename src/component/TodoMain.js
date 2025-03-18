import { useState, useEffect } from "react";

export default function TodoMain() {
  const [todos, setTodos] = useState([
    // {
    //   title: "Task 1",
    //   description: "This is task 1",
    // },
    // {
    //   title: "Task 2",
    //   description: "This is task 2",
    // },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentEditIndex, seCurrentEditIndex] = useState(null);

  useEffect(() => {
    setTitle("");
    setDescription("");
  }, [todos]);

  function addToTodo() {
    setTodos((prev) => [
      ...prev,
      {
        title,
        description,
      },
    ]);
  }

  function onEdit(idx) {
    console.log(idx);
    setIsEdit(true);
    seCurrentEditIndex(idx);
    setTitle(todos[idx].title);
    setDescription(todos[idx].description);
  }

  function editTodo() {
    console.log("is Editing");
    console.log(title, description, currentEditIndex);

    // console.log(updatedTodo);
    setTodos(updatedTodo);
  }

  return (
    <div className="todo-main">
      <div className="todo-main-input-body">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={isEdit ? editTodo : addToTodo}>
          {isEdit ? "Edit" : "Submit"}
        </button>
      </div>
      <div className="todo-tasks-lists">
        {todos?.map((todoItem, index) => {
          return (
            <div key={index} className="todo-item-body">
              <div className="todo-item-head">
                <span onClick={() => onEdit(index)}>Edit</span>
                <span>X</span>
              </div>
              <span>{todoItem?.title}</span>
              <p>{todoItem?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
