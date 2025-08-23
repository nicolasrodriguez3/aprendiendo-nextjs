"use client"
import { Todo } from "@/generated/prisma"
import { TodoItem } from "./TodoItem"
import { toggleTodo } from "../actions/actions"

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} updateTodoStatus={toggleTodo} />
                ))
            }
        </div>
    )
}