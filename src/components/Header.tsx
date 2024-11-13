import ThemeSwitch from '@/src/components/ThemeSwitch';
import SvgLogo from '@/src/components/SvgLogo';

function Header() {
  return (
    <div className='w-full flex justify-between items-center min-h-[64px]'>
      <div className='flex items-center gap-2'>
        <SvgLogo style='w-[3rem] h-[3rem] fill-black dark:fill-white' />
        <h1 className='text-3xl font-bold'>EngramSoft's Blog</h1>
      </div>
      <ThemeSwitch />
    </div>
  );
}

export default Header;
