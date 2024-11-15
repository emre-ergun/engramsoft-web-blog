// import SvgLogo from '@/src/components/SvgLogo';
import { Link, NavLink } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session } = useAuth();

  return (
    <div className='w-full flex justify-between items-center min-h-[48px]'>
      <Link to='/' className='flex items-end gap-2'>
        {/* <SvgLogo style='w-[3rem] h-[3rem] fill-black' /> */}
        <h1 className='text-xl border-2 border-black px-2 py-1'>ENGRAM.</h1>
      </Link>
      <div className='relative flex items-center justify-center gap-4'>
        <div className='hidden sm:flex items-center gap-4 text-lg'>
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
          {session ? (
            <NavLink
              to={'/profile'}
              className='text-xl border-2 border-black px-2 py-1 flex items-center justify-center'
            >
              {session.user.user_metadata.email.charAt(0).toUpperCase()}
            </NavLink>
          ) : (
            <NavLink
              to={'/sign-in'}
              className={({ isActive }) =>
                isActive
                  ? 'text-violet-500'
                  : 'text-black hover:text-violet-500'
              }
            >
              Sign in
            </NavLink>
          )}
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
          {isMenuOpen && (
            <div className='absolute flex flex-col gap-4 py-6 px-6 border-2 border-black top-[42px] right-0 text-center text-lg min-w-28'>
              {session ? (
                <NavLink
                  to={'/profile'}
                  className='flex items-center justify-center'
                >
                  {session.user.user_metadata.email.split('@')[0].toUpperCase()}
                </NavLink>
              ) : (
                <NavLink
                  to={'/sign-in'}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-violet-500'
                      : 'text-black hover:text-violet-500'
                  }
                >
                  Sign in
                </NavLink>
              )}
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500'
                    : 'text-black hover:text-violet-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-violet-500'
                    : 'text-black hover:text-violet-500'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
