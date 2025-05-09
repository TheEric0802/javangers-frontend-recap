import TodoContainer from "./TodoContainer.tsx";
import "./TodoPage.css"
import TodoCard from "./TodoCard.tsx";
import type {Todo} from "./types/Todo.ts";

type TodoPageProps = {
    todos: Todo[]
}

export default function TodoPage(props: TodoPageProps) {

    const openTodoCards = props.todos.filter((todo) => todo.status === "OPEN").map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
    ))
    const inProgressTodoCards = props.todos.filter((todo) => todo.status === "IN_PROGRESS").map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
    ))
    const doneTodoCards = props.todos.filter((todo) => todo.status === "DONE").map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
    ))

    return (
        <>
            <button>+ Add task</button>
            <div className={"lists"}>
                <TodoContainer heading={"OPEN"}>
                    {openTodoCards}
                </TodoContainer>
                <TodoContainer heading={"IN PROGRESS"}>
                    {inProgressTodoCards}
                </TodoContainer>
                <TodoContainer heading={"DONE"}>
                    {doneTodoCards}
                </TodoContainer>
            </div>
        </>
    )
}