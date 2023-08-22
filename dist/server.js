"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var todos_controleur_1 = require("./todos/todos.controleur");
var app = (0, express_1.default)();
var PORT = process.env.PORT;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", function (request, response) {
    try {
        return response.json({
            message: 'Hello world'
        });
    }
    catch (error) {
        console.log(error);
    }
});
app.use("/api/todos", todos_controleur_1.todoRouter);
app.listen(PORT, function () {
    console.log("Server is runing on port: ".concat(PORT));
});
