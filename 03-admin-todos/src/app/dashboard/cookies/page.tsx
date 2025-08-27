import { TabBar } from "@/components/TabBar";


export const metadata = {
  title: 'Cookies Page',
  description: 'Aprendiendo a usar Cookies',
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col w-full items-center">
      <span>Tabs</span>
      <TabBar />

    </div>
  );
}