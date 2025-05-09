import TodoContainer from "./TodoContainer.tsx";
import "./TodoPage.css"
import TodoCard from "./TodoCard.tsx";
import type {Todo} from "./types/Todo.ts";

type TodoPageProps = {
    todos: Todo[]
    updateTodoCallback: (todo: Todo) => void
}

export default function TodoPage(props: TodoPageProps) {

    const openTodoCards = props.todos.filter((todo) => todo.status === "OPEN").map((todo) => (
        <TodoCard key={todo.id} todo={todo} advanceButtonText={"Start now"} advanceButtonCallback={
            () => {
                console.log("Started")
                props.updateTodoCallback({...todo, status: "IN_PROGRESS"})
            }
        } />
    ))
    const inProgressTodoCards = props.todos.filter((todo) => todo.status === "IN_PROGRESS").map((todo) => (
        <TodoCard key={todo.id} todo={todo} advanceButtonText={"Finish"} advanceButtonCallback={
            () => {
                console.log("Finished")
                props.updateTodoCallback({...todo, status: "DONE"})
            }
        } />
    ))
    const doneTodoCards = props.todos.filter((todo) => todo.status === "DONE").map((todo) => (
        <TodoCard key={todo.id} todo={todo} advanceButtonText={"Delete"} advanceButtonCallback={
            () => console.log("Delete")
        } />
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