import { cookies } from "next/headers"
import { TabBar } from "@/components/TabBar";


export const metadata = {
  title: 'Cookies Page',
  description: 'Aprendiendo a usar Cookies',
};

export default async function CookiesPage() {
  const cookieStore = await cookies()
  const cookiesTab = cookieStore.get('selectedTab')?.value ?? "1"

  return (
    <div className="flex flex-col w-full items-center">
      <span>Tabs</span>
      <TabBar currentTab={+cookiesTab} />

    </div>
  );
}