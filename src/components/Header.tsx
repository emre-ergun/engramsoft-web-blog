import ThemeSwitch from '@/src/components/ThemeSwitch';
import SvgLogo from '@/src/components/SvgLogo';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full flex justify-between items-center min-h-[64px]'>
      <div className='flex items-center gap-2'>
        <SvgLogo style='w-[3rem] h-[3rem] fill-black dark:fill-white' />
        <h1 className='text-3xl font-bold'>EngramSoft's Blog</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-0 md:gap-4 text-lg'>
        <Link to={'/'} className='hover:text-violet-500'>
          Home
        </Link>
        <Link to={'/about'} className='hover:text-violet-500'>
          About
        </Link>
        <div className='hidden md:block'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}

export default Header;
