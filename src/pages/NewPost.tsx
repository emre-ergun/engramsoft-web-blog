import { useAuth } from '@/context/AuthContext';
import PostEditor from '@/src/components/Tiptap/PostEditor';
import { Navigate } from 'react-router-dom';
import MainLoading from '@/src/components/MainLoading';

function NewPost() {
  const { session, loading, isAdmin } = useAuth();

  if (loading) return <MainLoading />;

  if (!session || !isAdmin) return <Navigate replace to='/' />;

  return (
    <div className='min-h-[calc(100vh-48px)] w-full  pb-10'>
      <PostEditor />
    </div>
  );
}

export default NewPost;
