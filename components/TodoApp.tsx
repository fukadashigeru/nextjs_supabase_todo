import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import TodoList from "./TodoList";
import { getAllTodos, createTodo } from "@/utils/supabaseFunctions";

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);
  const [newTodo, setNewTodo] = useState("");
  // const [title, setTitle] = useState<string>("");

  const fetchTodos = async () => {
    const response = await getAllTodos();
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async (e: any) => {
    e.preventDefault();

    const res1 = await createTodo(newTodo);
    // console.log(response);
    // setTodos([...todos, response?.data[0]]);
    const res2 = await getAllTodos();
    setTodos(res2.data);
    setNewTodo("");
    // await createTodo(title);
  };

  return (
    <section className="text-center mb-2 text-2xl font-medium">
      <h3 className="mb-4">Supabase Todo App</h3>
      <form onSubmit={(e) => handleAddTodo(e)} className="space-y-8">
        <div className="flex justify-center items-center space-x-2">
          <Input
            type="text"
            placeholder="Add your todo"
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          {/* <Input
            type="text"
            placeholder="Add your todo"
            onChange={(e) => setTitle(e.target.value)}
          /> */}
          {/* <Button onClick={handleAddTodo}>Add</Button> */}
          <Button>Add</Button>
        </div>
      </form>
      {/* <TodoList todos={todos} setTodos={setTodos} /> */}
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </section>
  );
};

export default TodoApp;
