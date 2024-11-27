import { Link, NavLink } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { GoPerson } from 'react-icons/go';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Tooltip } from 'react-tooltip';
import { supabase } from '@/lib/supabase';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session, loading } = useAuth();

  if (loading) return;

  return (
    <div className='w-full overflow-hidden sticky top-0 right-0 z-[100] bg-fourth'>
      <div className='w-full flex justify-between items-center min-h-[48px]'>
        <Link to='/' className='flex items-end gap-2'>
          <h1 className='text-xl border-2 border-primary px-2 py-1'>ENGRAM.</h1>
        </Link>
        <div className='relative flex items-center justify-center gap-4'>
          <div className='hidden sm:flex items-center justify-center gap-4 text-lg'>
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
            {session ? (
              <>
                <div
                  onClick={() => supabase.auth.signOut()}
                  className='cursor-pointer'
                >
                  Sign Out
                </div>
                <Tooltip id='my-tooltip' />
                <div
                  data-tooltip-id='my-tooltip'
                  data-tooltip-content={session?.user.user_metadata.email}
                  className='text-2xl flex items-center justify-center border border-primary rounded-full'
                >
                  <GoPerson className='text-third' />
                </div>
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
                Sign In
              </NavLink>
            )}
          </div>
          <div
            className='flex sm:hidden items-end justify-center'
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            {isMenuOpen ? (
              <RxCross1 className='text-4xl hover:animate-wiggle transition-all duration-500' />
            ) : (
              <RxHamburgerMenu className='text-4xl' />
            )}
          </div>
        </div>
      </div>

      <div
        className={`relative mt-10 w-full flex flex-col gap-4 py-6 px-6 text-center text-lg min-w-36 bg-secondary ${
          isMenuOpen ? 'right-0 block' : '-right-[300px] hidden'
        } transition-all duration-1000`}
      >
        {session ? (
          <>
            <div className='cursor-pointer hover:text-fourth'>
              {session?.user.user_metadata.email.split('@')[0].toUpperCase()}
            </div>
            <div
              onClick={() => {
                supabase.auth.signOut();
                setIsMenuOpen(false);
              }}
              className='flex items-center justify-center cursor-pointer hover:text-fourth'
            >
              Sign Out
            </div>
          </>
        ) : (
          <NavLink
            to={'/sign-in'}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? 'text-fourth' : 'text-primary hover:text-fourth'
            }
          >
            Sign In
          </NavLink>
        )}
        <NavLink
          to={'/'}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? 'text-fourth' : 'text-primary hover:text-fourth'
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/edit'}
          onClick={() => setIsMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? 'text-fourth' : 'text-primary hover:text-fourth'
          }
        >
          New Post
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
