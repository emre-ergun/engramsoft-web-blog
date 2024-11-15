import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/src/layouts/MainLayout';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import NotFound from '@/src/pages/NotFound';
import SignIn from '@/src/pages/SignIn';
import SignUp from '@/src/pages/SignUp';
import AuthLayout from '@/src/layouts/AuthLayout';
import Profile from '@/src/pages/Profile';
import AuthProvider from '@/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='/' element={<AuthLayout />}>
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
