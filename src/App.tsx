import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("React"), new Todo("TypeScript")];

  return (
    <div>
      <Todos items={todos} />
      <NewTodo />
    </div>
  );
}

export default App;
