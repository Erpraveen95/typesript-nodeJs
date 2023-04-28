import { Router } from "express";
import { Todo } from "../Models/Todo";

const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/add-todo", (req, res) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "added new todo", todo: todos });
});

router.put("/todo/:todoId", (req, res) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "Updated Todo" });
  }
  res.status(404).json({ message: "Todo Not Found" });
});

router.delete("/todo/:todoId", (req, res) => {
  todos = todos.filter((todoItem) => todoItem.id! == req.params.todoId);
  res.status(200).json({ message: "delete success" });
});
export default router;
