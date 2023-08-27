import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import { Todo } from "./todo";
import { TodoCreationParams, TodoService } from "./todoService";

@Route("todos")
export class todosController extends Controller {
  @Get("{todoId}")
  public async getTodo(@Path() todoId: number): Promise<Todo> {
    return new TodoService().get(todoId);
  }
}
