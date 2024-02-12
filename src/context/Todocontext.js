/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

});

export const Todoprovider = Todocontext.Provider

export const useTodo = () => {
    return useContext(Todocontext)
}