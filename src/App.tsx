import ThemeContextProvider from '@/context/theme-context';
import Header from '@/src/components/Header';

function App() {
  return (
    <ThemeContextProvider>
      <main className='flex flex-col items-center px-4'>
        <Header />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
