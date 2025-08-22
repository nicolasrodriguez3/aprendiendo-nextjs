import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
    title: 'Listado de tareas',
    description: 'Listado de tareas',
};

export default async function ServerTodosPage() {
    const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } })

    return (
        <div>
            <div className="mb-6">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}

