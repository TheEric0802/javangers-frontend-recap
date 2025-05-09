import type {Todo} from "./types/Todo.ts";
import "./TodoCard.css"

type TodoCardProps = {
    todo: Todo
}

export default function TodoCard(props: TodoCardProps) {
    return (
        <>
            <div className={"TodoCard"}>
                <p>{props.todo.description}</p>
            </div>
        </>
    )
}