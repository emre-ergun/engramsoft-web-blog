import { BsMoon, BsSun } from 'react-icons/bs';
import { useThemeContext } from '@/context/theme-context';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <div className='fixed right-5 top-5'>
      <button
        onClick={toggleTheme}
        className='w-[3rem] h-[3rem] rounded-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex justify-center items-center hover:scale-[1.15] active:scale-100 transition-all duration-500 dark:bg-black'
      >
        {theme === 'light' ? <BsSun /> : <BsMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
