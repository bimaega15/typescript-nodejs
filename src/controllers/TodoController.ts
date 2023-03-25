import { Request, Response } from "express";
import IController from "./ControllerInterface";
import TodoService from "../services/TodoService";

class TodoController implements IController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todos = await services.getAll();

    return res.send({
      data: todos,
      message: "",
    });
  };
  create = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = services.store();

    return res.send({
      data: todo,
      message: "Todo created",
    });
  };
  show = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = services.getOne();

    return res.send({
      data: todo,
      message: "Todo show",
    });
  };
  update = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = services.update();

    return res.send({
      data: todo,
      message: "Todo updated",
    });
  };
  delete = async (req: Request, res: Response): Promise<Response> => {
    const services: TodoService = new TodoService(req);
    const todo = services.delete();

    return res.send({
      data: todo,
      message: "Todo deleted",
    });
  };
}

export default new TodoController();
