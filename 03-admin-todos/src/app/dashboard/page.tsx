import { auth } from "@/auth";
import { WidgetItem } from "@/components/WidgetItem";
import Image from 'next/image';
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth()

    if (!session?.user) {
        redirect("api/auth/signin")
    }
    
    const { name, image } = session.user
    return (
        <div className="grid gap-6 sm:grid-cols-2 grid-cols-1">
            <WidgetItem title="Bienvenido de nuevo">
                <h1>{name}</h1>
                {image && <Image src={image} width={60} height={60} alt="profile image" />}

            </WidgetItem>
        </div>
    );
}