import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/src/layouts/MainLayout';
import Home from '@/src/pages/Home';
import NotFound from '@/src/pages/NotFound';
import SignIn from '@/src/pages/SignIn';
import SignUp from '@/src/pages/SignUp';
import AuthProvider from '@/context/AuthContext';
import QueryProvider from '@/context/QueryProvider';
import Post from '@/src/pages/Post';
import PostEditor from '@/src/pages/PostEditor';

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
              <Route path='edit' element={<PostEditor />} />
              <Route path='post/:id/:name' element={<Post />} />
              <Route path='sign-in' element={<SignIn />} />
              <Route path='sign-up' element={<SignUp />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryProvider>
    </AuthProvider>
  );
}

export default App;
