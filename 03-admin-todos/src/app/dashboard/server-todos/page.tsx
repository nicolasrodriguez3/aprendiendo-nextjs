import { getUserSession } from "@/auth/actions/auth";
import prisma from "@/lib/prisma";

import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";
import { redirect } from "next/navigation";

export const metadata = {
    title: 'Listado de tareas',
    description: 'Listado de tareas',
};

export default async function ServerTodosPage() {
    const user = await getUserSession()
    if (!user) redirect("api/auth/signin")

    const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' }, where: { userId: user.id} })

    return (
        <div>
            <div className="mb-6">
                <NewTodo />
            </div>
            <TodosGrid todos={todos} />
        </div>
    );
}

