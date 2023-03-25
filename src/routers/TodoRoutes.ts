import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/TodoValidator";
import { auth } from "../middlewares/AuthMiddleware";

// Controllers
import TodoController from "../controllers/TodoController";

class TodoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.use(auth);
    this.router.get("/", TodoController.index);
    this.router.post("/", validate, TodoController.create);
    this.router.get("/:id", TodoController.show);
    this.router.put("/:id", validate, TodoController.update);
    this.router.delete("/:id", TodoController.delete);
  }
}

export default new TodoRoutes().router;
