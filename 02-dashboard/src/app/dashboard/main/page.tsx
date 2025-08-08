import { WidgetsGrid } from '@/components/dashboard/WidgetsGrid';


export const metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

export default function MainPage() {
  return (
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
      <p>Información general</p>
      <WidgetsGrid />
    </div>
  );
}