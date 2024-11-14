// import SvgLogo from '@/src/components/SvgLogo';
import { Link, NavLink } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full flex justify-between items-end min-h-[48px]'>
      <Link to='/' className='flex items-end gap-2'>
        {/* <SvgLogo style='w-[3rem] h-[3rem] fill-black' /> */}
        <h1 className='text-xl border-2 border-black px-2 py-1'>ENGRAM.</h1>
      </Link>
      <div className='flex items-end justify-center gap-4'>
        <div className='hidden sm:flex items-end gap-4 text-lg'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
          >
            About
          </NavLink>
          <NavLink
            to={'/sign-in'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
          >
            Sign in
          </NavLink>
        </div>
        <div
          className='flex sm:hidden items-end justify-center'
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
        <div className='fixed flex flex-col gap-4 py-6 px-6 border-2 border-black rounded-md top-[64px] right-[8px] text-lg'>
          <NavLink
            to={'/sign-in'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </NavLink>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive ? 'text-violet-500' : 'text-black hover:text-violet-500'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
