import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className='px-2 flex flex-col items-start max-w-screen-lg mx-auto'>
      <div className='min-h-[48px] flex items-center'>
        <Link to='/' className='flex items-end gap-2'>
          {/* <SvgLogo style='w-[3rem] h-[3rem] fill-black' /> */}
          <h1 className='text-xl border-2 border-primary px-2 py-1'>ENGRAM.</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
