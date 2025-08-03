import { Sidebar } from "../components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <div className="bg-slate-100 w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">

                <Sidebar />

                <div className="text-slate-900 p-2 w-full">
                    {children}
                </div>

            </div>
        </div>
    )

}