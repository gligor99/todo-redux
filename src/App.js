import { useSelector } from "react-redux";
import Empty from "./components/EmptyList/Empty";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import { selectTodoList } from "./features/todo/todoSlice";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
  const todoList = useSelector(selectTodoList);
  
  return (
    <div className="App">
      <Logo className="logo" />
      {todoList.length === 0 ? <Empty /> : <TodoList />}
      <Input />
    </div>
  );
}

export default App;
