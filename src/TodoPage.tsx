import TodoContainer from "./TodoContainer.tsx";
import "./TodoPage.css"
import TodoCard from "./TodoCard.tsx";

export default function TodoPage() {
    return (
        <>
            <button>+ Add task</button>
            <div className={"lists"}>
                <TodoContainer heading={"OPEN"}>
                    <TodoCard todo={{id: "1", description: "test", status: "OPEN"}} />
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