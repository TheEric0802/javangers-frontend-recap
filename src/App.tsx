import './App.css'
import Header from "./Header.tsx";
import TodoPage from "./TodoPage.tsx";
import {useCallback, useEffect, useState} from "react";
import type {Todo} from "./types/Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import CreateTodoPage from "./CreateTodoPage.tsx";

function App() {
    const [Todos, setTodos] = useState<Todo[]>([])

    const getTodos = useCallback(() => {
        axios.get<Todo[]>("/api/todo")
            .then(response => {
                setTodos(response.data)
            })
    }, [])

    useEffect(() => {
        getTodos()
        }, [getTodos]
    )

    function updateTodo(todo: Todo) {
        axios.put<Todo>(`/api/todo/${todo.id}`, todo)
            .then(() => {
                getTodos()
            })
            .catch(e => console.error(e))
    }

    function deleteTodo(todoId: string) {
        axios.delete<Todo>(`/api/todo/${todoId}`)
            .then(() => {
                getTodos()
            })
            .catch(e => console.error(e))
    }

    function createTodo(todo: Todo) {
        axios.post<Todo>("/api/todo", todo)
            .then(() => {
                getTodos()
            })
            .catch(e => console.error(e))
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={
                    <TodoPage todos={Todos} updateTodoCallback={updateTodo} deleteTodoCallback={deleteTodo}/>
                } />
                <Route path={"/createTodo"} element={<CreateTodoPage createTodoCallback={createTodo} />} />
            </Routes>

        </>
    )
}

export default App
