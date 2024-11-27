// import SvgLogo from '@/src/components/SvgLogo';
import { Link, NavLink } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { GoPerson } from 'react-icons/go';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Tooltip } from 'react-tooltip';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, isAdmin, loading } = useAuth();

  if (loading) return;

  return (
    <div className='w-full flex justify-between items-center min-h-[48px]'>
      <Link to='/' className='flex items-end gap-2'>
        {/* <SvgLogo style='w-[3rem] h-[3rem] fill-black' /> */}
        <h1 className='text-xl border-2 border-primary px-2 py-1'>ENGRAM.</h1>
      </Link>
      <div className='relative flex items-center justify-center gap-4'>
        <div className='hidden sm:flex items-center justify-center gap-4 text-lg'>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
            }
          >
            About
          </NavLink>
          <NavLink
            to={'/edit'}
            className={({ isActive }) =>
              isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
            }
          >
            New Post
          </NavLink>
          {session ? (
            <>
              <Tooltip id='my-tooltip' />
              <NavLink
                data-tooltip-id='my-tooltip'
                data-tooltip-content={session?.user.user_metadata.email}
                to={'/profile'}
                className='text-2xl flex items-center justify-center border border-primary rounded-full'
              >
                <GoPerson className='text-third' />
              </NavLink>
            </>
          ) : (
            <NavLink
              to={'/sign-in'}
              className={({ isActive }) =>
                isActive
                  ? 'text-secondary'
                  : 'text-primary hover:text-secondary'
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
            <div className='absolute flex flex-col gap-4 py-6 px-6 border-2 border-primary top-[42px] right-0 text-center text-lg min-w-36 bg-fourth z-[99]'>
              {session ? (
                <NavLink
                  to={'/profile'}
                  className='flex items-center justify-center hover:text-secondary'
                >
                  {session?.user.user_metadata.email
                    .split('@')[0]
                    .toUpperCase()}
                </NavLink>
              ) : (
                <NavLink
                  to={'/sign-in'}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-secondary'
                      : 'text-primary hover:text-secondary'
                  }
                >
                  Sign in
                </NavLink>
              )}
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                }
              >
                Home
              </NavLink>
              <NavLink
                to={'/edit'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                }
              >
                New Post
              </NavLink>
              <NavLink
                to={'/about'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary'
                }
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
