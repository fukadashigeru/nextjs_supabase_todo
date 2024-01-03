import { supabase } from "./supabase";

interface Todo {
  id: number;
  title: string;
}

interface TodoResponse {
  data: Todo[];
}

export const getAllTodos = async () => {
  //   const { data, error } = await supabase.from("todo").select("*");
  //   if (error) throw error;
  //   return data;
  const todos = await supabase.from("todo").select("*");
  return todos;
};

export const createTodo = async (
  title: string
): Promise<TodoResponse | null> => {
  const newTodo = { title };
  const { data, error } = await supabase.from("todo").insert(newTodo).select();
  if (error) throw error;
  return data ? { data } : null;
};

// export const createTodo = async (title: string) => {
//   console.log(title);
//   await supabase.from("todo").insert({ title: title });
//   // return todo;
// };

export const deleteTodo = async (id: number) => {
  const { error } = await supabase.from("todo").delete().eq("id", id);
  if (error) throw error;
};
