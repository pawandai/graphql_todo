import TodoCard from "./components/shared/TodoCard";
import MaxWidthWrapper from "./components/utils/MaxWidthWrapper";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export type todoType = {
  id: string;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState([]);
  const loading = false;
  // const { loading, error, data } = useQuery(GET_TODOS);
  //
  // setTodos(data);
  //
  // if (error) return <p>Something Went wrong</p>;

  return (
    <>
      <MaxWidthWrapper className="flex flex-col gap-5">
        {loading && <Loader2 className="animate-spin h-12 w-12" />}
        {todos &&
          todos.map((todo: todoType) => (
            <TodoCard
              key={todo.title}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}{" "}
        hi
      </MaxWidthWrapper>
    </>
  );
}

export default App;
