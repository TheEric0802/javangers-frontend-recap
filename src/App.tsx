import './App.css'
import Header from "./Header.tsx";
import TodoPage from "./TodoPage.tsx";
import {useCallback, useEffect, useState} from "react";
import type {Todo} from "./types/Todo.ts";
import axios from "axios";

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

  return (
    <>
        <Header />
        <TodoPage todos={Todos}/>
    </>
  )
}

export default App
