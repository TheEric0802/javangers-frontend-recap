import type {Todo} from "./types/Todo.ts";
import "./TodoCard.css"

type TodoCardProps = {
    todo: Todo
    advanceButtonText: string
    advanceButtonCallback: () => void
}

export default function TodoCard(props: TodoCardProps) {
    return (
        <>
            <div className={"TodoCard"}>
                <p>{props.todo.description}</p>
                <div className={"Buttons"}>
                    <button>Edit</button>
                    <button onClick={props.advanceButtonCallback}>{props.advanceButtonText}</button>
                </div>
            </div>
        </>
    )
}