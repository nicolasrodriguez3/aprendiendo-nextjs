import { Todo } from "@/generated/prisma"
import styles from "./TodoItem.module.css"
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
    todo: Todo

    // Acciones
    updateTodoStatus: (id: string, complete: boolean) => Promise<Todo | void>
}


export const TodoItem = ({ todo, updateTodoStatus }: Props) => {
    return (
        <div className={todo.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                <button onClick={() => {
                    updateTodoStatus(todo.id, !todo.complete)
                }} className={`p-2 rounded-md cursor-pointer 
                    ${todo.complete ? "bg-blue-100 hover:bg-blue-100/60" : "bg-red-100 hover:bg-red-100/60"}`}>
                    {
                        todo.complete
                            ? <IoCheckboxOutline size={24} />
                            : <IoSquareOutline size={24} />
                    }
                </button>
                <div className="text-center sm:text-left">
                    {todo.description}
                </div>

            </div>
        </div>
    )
}