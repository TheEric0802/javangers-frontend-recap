import type {Todo} from "./types/Todo.ts";
import "./TodoCard.css"
import {useNavigate} from "react-router-dom";

type TodoCardProps = {
    todo: Todo
    advanceButtonText: string
    advanceButtonCallback: () => void
}

export default function TodoCard(props: TodoCardProps) {

    const nav = useNavigate()

    return (
        <>
            <div className={"TodoCard"}>
                <p>{props.todo.description}</p>
                <div className={"Buttons"}>
                    <button onClick={() => nav(`/editTodo/${props.todo.id}`)}>Edit</button>
                    <button onClick={props.advanceButtonCallback}>{props.advanceButtonText}</button>
                </div>
            </div>
        </>
    )
}