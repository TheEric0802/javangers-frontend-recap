import type {Todo} from "./types/Todo.ts";
import type {FormEvent} from "react";
import "./CreateTodoPage.css"
import {useNavigate} from "react-router-dom";

type CreateTodoPageProps = {
    createTodoCallback: (todo: Todo) => void
}

export default function CreateTodoPage(props: CreateTodoPageProps) {

    const nav = useNavigate()

    function onSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const todo: Todo = {id: "", description: formData.get("description") as string, status: "OPEN"}
        props.createTodoCallback(todo)
        e.currentTarget.getElementsByTagName("input")[0].value = ""
        nav("/")
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <input name={"description"} className={"createDescriptionInput"}/>
                <button>Create</button>
                <button type={"button"} onClick={() => nav("/")}>Cancel</button>
            </form>
        </>
    )
}