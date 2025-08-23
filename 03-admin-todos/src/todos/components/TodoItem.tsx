import { Todo } from "@/generated/prisma"
import styles from "./TodoItem.module.css"
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { startTransition, useOptimistic } from "react";

interface Props {
    todo: Todo

    // Acciones
    updateTodoStatus: (id: string, complete: boolean) => Promise<Todo | void>
}


export const TodoItem = ({ todo, updateTodoStatus }: Props) => {
    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(todo, (state, newValue: boolean) => ({ ...state, complete: newValue }))

    const onToggleTodo = async () => {
        try {
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete))

            await updateTodoStatus(todoOptimistic.id, !todoOptimistic.complete)

        } catch (error) {
            console.log(error)
            startTransition(() => toggleTodoOptimistic(!todoOptimistic.complete))
        }

    }

    return (
        <div className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                <button onClick={onToggleTodo} className={`p-2 rounded-md cursor-pointer 
                    ${todoOptimistic.complete ? "bg-blue-100 hover:bg-blue-100/60" : "bg-red-100 hover:bg-red-100/60"}`}>
                    {todoOptimistic.complete
                        ? <IoCheckboxOutline size={24} />
                        : <IoSquareOutline size={24} />
                    }
                </button>
                <div className="text-center sm:text-left">
                    {todoOptimistic.description}
                </div>

            </div>
        </div>
    )
}