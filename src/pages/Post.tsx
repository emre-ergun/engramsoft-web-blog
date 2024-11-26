import { usePost } from '@/api/posts';
import { useParams } from 'react-router-dom';
import MainLoading from '@/src/components/MainLoading';
import NotFound from '@/src/pages/NotFound';
import parse from 'html-react-parser';

function Post() {
  const { id: idString } = useParams()!;
  const id = parseInt(idString!);

  const { data: post, error, isLoading } = usePost(id);

  if (isLoading)
    return (
      <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 items-center justify-center mt-10'>
        <MainLoading />
      </div>
    );
  if (error) return <NotFound />;
  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 items-center mt-10'>
      {post && (
        <div className='w-full'>
          <div className='relative w-full p-4 overflow-hidden flex flex-col min-h-[16rem] items-center justify-center '>
            <h1 className='text-4xl font-bold bg-secondary text-fourth px-2'>
              {post.title}
            </h1>
            <div className='flex items-center justify-start gap-4 mt-2'>
              <p className='bg-secondary text-fourth px-2'>by {post.author}</p>
              <p className='bg-secondary text-fourth px-2'>
                on {new Date(post.created_at).toLocaleDateString()}
              </p>
            </div>
            <img src={post.cover_image} className='absolute top-0 left-0 -z-10 object-cover blur-sm' />
          </div>
          <div className='ProseMirror whitespace-pre-line px-6 py-4 bg-fourth'>
            {parse(post.content)}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
