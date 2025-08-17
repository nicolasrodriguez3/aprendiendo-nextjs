import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos/components/TodosGrid";
import { NewTodo } from '../../../todos/components/NewTodo';

export const metadata = {
    title: 'Listado de tareas',
    description: 'Listado de tareas',
};


export default async function RestTodosPage() {
    const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } })

    return (
        <div>
            <div className="mb-6">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}