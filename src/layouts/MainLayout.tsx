import { Outlet } from 'react-router-dom';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

const MainLayout = () => {
  return (
    <div className='px-2 flex flex-col items-center max-w-screen-xl mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
