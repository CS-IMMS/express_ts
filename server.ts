import "dotenv/config";
import  express  from "express";
import type { Request, Response } from 'express';
import { todoRouter } from "./todos/todos.controleur";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (request: Request, response: Response) => {
  try{
    return response.json({
        message: 'Hello world'
       })  
  }catch(error: any){
    console.log(error);
    
  }
}
)
app.use("/api/todos", todoRouter)

app.listen(PORT, () => {
    console.log(`Server is runing on port: ${PORT}`);
    
})