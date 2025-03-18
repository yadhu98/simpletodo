import TodoMain from "./component/TodoMain";
import "./styles.css";
// import { Provider } from "react-redux";
// import { store } from "./store";

export default function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <TodoMain />
      {/* </Provider> */}
    </div>
  );
}
