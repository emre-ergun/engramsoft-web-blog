import SvgLogo from '@/src/components/SvgLogo';
import { Link } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full flex justify-between items-center min-h-[64px]'>
      <Link to='/' className='flex items-center gap-2'>
        <SvgLogo style='w-[3rem] h-[3rem] fill-black' />
        <h1 className='text-3xl font-bold'>EngramSoft's Blog</h1>
      </Link>
      <div className='flex items-center justify-center gap-4'>
        <div className='hidden sm:flex items-center gap-4 text-xl'>
          <Link to={'/'} className='hover:text-violet-500'>
            Home
          </Link>
          <Link to={'/about'} className='hover:text-violet-500'>
            About
          </Link>
        </div>
        <div
          className='flex sm:hidden items-center justify-center'
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          {isMenuOpen ? (
            <RxCross1 className='text-4xl' />
          ) : (
            <RxHamburgerMenu className='text-4xl' />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className='fixed flex flex-col gap-4 py-6 px-6 border-2 border-black rounded-md top-[64px] right-[8px] text-xl'>
          <Link
            to={'/'}
            className='hover:text-violet-500 hover:underline'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='hover:text-violet-500 hover:underline'
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
