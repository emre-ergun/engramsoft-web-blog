import ThemeSwitch from './components/ThemeSwitch';
import ThemeContextProvider from '../context/theme-context';

function App() {
  return (
    <ThemeContextProvider>
      <main className='flex flex-col items-center px-4'>
        <h1 className='text-3xl font-bold py-3'>EngramSoft Blog</h1>
      </main>
      <ThemeSwitch />
    </ThemeContextProvider>
  );
}

export default App;
