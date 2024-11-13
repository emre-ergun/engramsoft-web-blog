import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from '@/src/layouts/MainLayout';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import NotFound from '@/src/pages/NotFound';
import SignIn from '@/src/pages/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='sign-in' element={<SignIn />} />
      <Route path='about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
