const {Router} = require("express");

const router = Router();

const Todo = require("../models/todo.models");

router.get("/api/v1/todo", async (req, res) => {
    try {
            const object = await Todo.findAll({
            atributes: ["id", "title", "description", "status"],
            order: ["id"]
        })
        res.json(object)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/api/v1/todo", async (req, res) => {
    try{
        const body = req.body;
        await Todo.create(body)
        res.status(201).json();

    } catch (error) {
        res.status(400).json(error);
    }
})

router.put("/api/v1/todo/:id", async (req, res) => {
    try {
        const{id} = req.params;
        const data = req.body;
        await Todo.update(data, {
            where: {id}
        })
        res.status(204).send()

    }catch (error) {
        res.status(400).json(error);
    }
})

router.delete("/api/v1/todo/:id", async (req, res) => {
    try {
        const{id} = req.params;
        const data = req.body;
        await Todo.destroy(data, {
            where: {id}
        })
        res.status(204).send()

    }catch (error) {
        res.status(400).json(error);
    }
})

module.exports = {
    todoRouter: router
};