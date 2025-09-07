"use client"

import { useSession } from "next-auth/react";


export default function ProfilePage() {
    const { data: session } = useSession()



    return (
        <div>
            <h1>Mi perfil</h1>
            <hr />

            <div className="flex flex-col">
                <p>
                    {
                        session?.user?.name ?? "Usuario"
                    }
                </p>
                <p>
                    {JSON.stringify(session, null, 2)}
                </p>
            </div>
        </div>
    );
}