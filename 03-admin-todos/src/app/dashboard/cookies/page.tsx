import { TabBar } from "@/components/TabBar";


export const metadata = {
 title: 'Cookies Page',
 description: 'Aprendiendo a usar Cookies',
};

export default function CookiesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex- flex-col">
        <span>Tabs</span>
        <TabBar />

      </div>
    </div>
  );
}