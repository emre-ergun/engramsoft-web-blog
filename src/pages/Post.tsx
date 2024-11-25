import { usePost } from '@/api/posts';
import { Navigate, useParams } from 'react-router-dom';
import MainLoading from '@/src/components/MainLoading';


function Post() {
  const { id: idString } = useParams();
  const id = idString && parseInt(idString);

  if (!id) return <Navigate to='/' />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: post, error, isLoading } = usePost(id);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 items-center justify-center mt-10'>
        <MainLoading />
      </div>
    );
  if (error)
    return (
      <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center items-center mt-10'>
        <h1>Failed to fetch post</h1>
      </div>
    );
  return (
    <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 items-center justify-center mt-10'>
      {post && (
        <div className='w-full max-w-4xl p-4 bg-fourth shadow-xl'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <p className='text-lg font-light'>{post.content}</p>
          <div className='flex items-center justify-end gap-4 mt-2'>
            <p>by {post.author}</p>
            <p>on {new Date(post.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
