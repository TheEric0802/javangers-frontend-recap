import type {Todo} from "./types/Todo.ts";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import type {TodoStatus} from "./types/TodoStatus.ts";
import type {FormEvent} from "react";
import "./EditTodoPage.css"

type EditTodoPageProps = {
    todos: Todo[]
    updateTodoCallback: (todo: Todo) => void
    deleteTodoCallback: (todoId: string) => void
}

export default function EditTodoPage(props: EditTodoPageProps) {

    const params = useParams();
    const nav = useNavigate()

    const todo = props.todos.find(todo => todo.id === params.id)

    if (!todo) {
        return (
            <Navigate to={"/"} />
        )
    }

    function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newTodo: Todo = {id: params.id as string, description: formData.get("description") as string, status: formData.get("status") as TodoStatus}
        props.updateTodoCallback(newTodo)
        nav("/")
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input name={"description"} defaultValue={todo.description} className={"editDescriptionInput"}/>
                <select name={"status"} defaultValue={todo.status} className={"editDescriptionInput"}>
                    <option value={"OPEN"}>OPEN</option>
                    <option value={"IN_PROGRESS"}>IN PROGRESS</option>
                    <option value={"DONE"}>DONE</option>
                </select>
                <button type={"submit"}>Save</button>
                <button type={"button"} onClick={() => nav("/")}>Cancel</button>
                <button type={"button"} className={"editButtonDelete"} onClick={() => props.deleteTodoCallback(todo.id)}>Delete</button>
            </form>
        </>
    )
}