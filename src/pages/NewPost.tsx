import { useAuth } from '@/context/AuthContext';
import PostEditor from '@/src/components/Tiptap/PostEditor';
import { Navigate } from 'react-router-dom';
// import Notes from '@/src/components/Notes';

function NewPost() {
  const { session, loading, isAdmin, profile } = useAuth();

  if (loading)
    return (
      <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
    );
  console.log(isAdmin, profile);
  if (!session || !isAdmin) return <Navigate replace to='/' />;

  return (
    <div className='min-h-[calc(100vh-48px)] w-full  pb-10'>
      <PostEditor />
      {/* <Notes /> */}
    </div>
  );
}

export default NewPost;
