import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

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

  // const todos = useSelector((state) => state.todo.todos);
  console.log("todos", todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentEditIndex, seCurrentEditIndex] = useState(null);


  const localItems = localStorage.getItem('todos')
  const todosArray = JSON.parse(localItems);

console.log("hhh",todosArray);
  // const dispatch = useDispatch();
  useEffect(() => {
    // if()
   

    if (todosArray?.length > 0) {
      setTodos(todosArray)
    }
    setTitle("");
    setDescription("");
  }, []);

  function addToTodo() {
    localStorage.setItem("todos", JSON.stringify([...todos, { title, description }]));
    setTodos((prev) => [
      ...prev,
      {
        title,
        description,
      },
    ]);
    setTitle("")
    setDescription("")
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
    if (currentEditIndex !== null) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentEditIndex ? { title, description } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodos(updatedTodos);
      setIsEdit(false);
      seCurrentEditIndex(null);
      setTitle("")
      setDescription("")
    }
  }

  function deleteTodo(idx) {
    const updatedTodos = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
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
                <span onClick={() => deleteTodo(index)}>X</span>
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
