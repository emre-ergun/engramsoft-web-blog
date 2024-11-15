import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>auth layout</div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
