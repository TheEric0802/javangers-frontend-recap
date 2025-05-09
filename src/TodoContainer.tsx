import type {ReactNode} from "react";
import "./TodoContainer.css"

type TodoContainerProps = {
    heading: string
    children: ReactNode
}

export default function TodoContainer(props: TodoContainerProps) {
    return (
        <div className={"TodoContainer"}>
            <h2>{props.heading}</h2>
            {props.children}
        </div>
    )
}