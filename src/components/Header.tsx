import ThemeSwitch from '@/src/components/ThemeSwitch';
import SvgLogo from '@/src/components/SvgLogo';

function Header() {
  return (
    <div className='fixed left-[50%] -translate-x-[50%] w-screen flex justify-evenly items-center'>
      <SvgLogo style='w-[3rem] h-[3rem] fill-black dark:fill-white m-3'/>
      <h1 className='text-3xl font-bold py-2'>EngramSoft's Blog</h1>
      <ThemeSwitch />
    </div>
  );
}

export default Header;
