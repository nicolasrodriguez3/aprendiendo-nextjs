import { SimpleWidget } from '../../../components/SimpleWidget';

export default function MainPage() {
  return (
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
      <p>Información general</p>
      <div className='flex flex-wrap gap-4 mt-2'>
        <SimpleWidget />
      </div>
    </div>
  );
}