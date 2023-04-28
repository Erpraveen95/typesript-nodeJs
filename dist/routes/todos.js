"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/add-todo", (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: "added new todo", todo: todos });
});
router.put("/todo/:todoId", (req, res) => {
    const params = req.params;
    const body = req.body;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: "Updated Todo" });
    }
    res.status(404).json({ message: "Todo Not Found" });
});
router.delete("/todo/:todoId", (req, res) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id == params.todoId);
    res.status(200).json({ message: "delete success" });
});
exports.default = router;
