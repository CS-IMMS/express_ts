
import { PrismaClient } from "@prisma/client";
import  express  from "express";
import type { Request, Response } from 'express';
import { createTodos } from "./todos.type";

export const todoRouter = express.Router()

const prisma = new PrismaClient()


todoRouter.post("/add",  async(request: Request, response: Response) => {
    try {
        const body: createTodos = request.body
        const {title} = body
        const createNewTodo = await prisma.todos.create({
            data: {
                title: title
            }
        })
        return response.json(createNewTodo)
        
    } catch (error: any) {
        console.log(error);

    }

})
todoRouter.get("/all",  async(request: Request, response: Response) => {
    try {
        const getAllTodos = await prisma.todos.findMany()
       
        return response.json(getAllTodos)
        
    } catch (error: any) {
        console.log(error);

    }

})
//TODO: add getTodobyId '/:id'


//TODO add removeTodoById '/:id'