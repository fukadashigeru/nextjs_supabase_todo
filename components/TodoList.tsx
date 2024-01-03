import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { getAllTodos, deleteTodo } from "@/utils/supabaseFunctions";

// // タスクのリストを定義
// const tasks = [
//   { status: "完了", content: "読書" },
//   { status: "未完了", content: "散歩" },
//   { status: "未完了", content: "プログラミング" },
// ];

// Todoの型を定義
interface Todo {
  id: number;
  title: string;
}

// Propsを定義
interface TodoListProps {
  todos: Todo[];
  fetchTodos: () => void;
  // setTodos: React.Dispatch<React.SetStateAction<any>>;
  // setTodos: React.Dispatch<any>;
}

// type TodoListProps2 = {
//   todos: Todo[];
// };

const TodoList = (props: TodoListProps) => {
  // const { todos, setTodos } = props;
  const { todos, fetchTodos } = props;

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();

    // const todos = await getAllTodos();
    // setTodos(todos.data);
  };

  return (
    <Table className="mt-2">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">ステータス</TableHead> */}
          <TableHead>ステータス</TableHead>
          <TableHead>内容</TableHead>
          <TableHead className="text-right">削除</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* <TableRow>
        <TableCell className="font-medium">完了</TableCell>
        <TableCell>完了</TableCell>
        <TableCell>読書</TableCell>
        <TableCell className="text-right">読書</TableCell>
      </TableRow> */}
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell>{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell className="text-right">
              <span
                className="cursor-pointer"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                ✖️
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
