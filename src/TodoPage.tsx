import TodoContainer from "./TodoContainer.tsx";
import "./TodoPage.css"

export default function TodoPage() {
    return (
        <>
            <button>+ Add task</button>
            <div className={"lists"}>
                <TodoContainer heading={"OPEN"}>
                    <p>test child</p>
                </TodoContainer>
                <TodoContainer heading={"IN PROGRESS"}>
                    <p>test child</p>
                </TodoContainer>
                <TodoContainer heading={"DONE"}>
                    <p>test child</p>
                </TodoContainer>
            </div>
        </>
    )
}