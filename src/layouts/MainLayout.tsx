import { Outlet } from 'react-router-dom';
import Header from '@/src/components/Header';

const MainLayout = () => {
  return (
    <div className='px-2 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
