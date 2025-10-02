import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { Title } from "@/components";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    // redirect("/auth/login?redirect=/profile");
    redirect("/");
  }

  return (
    <div>
      <Title title="Perfil" />
      <pre>{JSON.stringify(session, null, 2)}</pre>
      
    </div>
  );
}
