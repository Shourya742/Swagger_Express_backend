"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false,
        };
    }
    create(todoCreationParams) {
        console.log("mock db call");
        return {
            id: 11,
            title: "mocked todo",
            description: "mocked todo",
            done: false,
        };
    }
}
exports.TodoService = TodoService;
