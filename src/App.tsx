import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/src/layouts/MainLayout';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import NotFound from '@/src/pages/NotFound';
import SignIn from '@/src/pages/SignIn';
import SignUp from '@/src/pages/SignUp';
import Profile from '@/src/pages/Profile';
import AuthProvider from '@/context/AuthContext';
import NewPost from '@/src/pages/NewPost';
import QueryProvider from '@/context/QueryProvider';
import Post from '@/src/pages/Post';

function App() {
  return (
    <AuthProvider>
      <QueryProvider>
        <Router
          future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
        >
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='new-post' element={<NewPost />} />
              <Route path='post/:id' element={<Post />} />
              <Route path='about' element={<About />} />
              <Route path='sign-in' element={<SignIn />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='profile' element={<Profile />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
