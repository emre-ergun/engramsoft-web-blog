import { usePostListsByKeyword } from '@/api/posts';
import PostCard from '@/src/components/PostCard';
import MainLoading from '@/src/components/MainLoading';

function PostView({ keyword }: { keyword: string }) {
  const { data: posts, error, isLoading } = usePostListsByKeyword(keyword);

  if (isLoading)
    return (
      <div className='min-h-[400px] w-full flex flex-col gap-4 items-center justify-center mt-10'>
        <MainLoading />
      </div>
    );
  if (error)
    return (
      <div className='min-h-[400px] w-full flex flex-col gap-4 justify-center items-center mt-10'>
        <h1>Failed to fetch posts</h1>
      </div>
    );
  return posts?.length ? (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {posts.map(post => (
        <div key={post.id} className='min-h-[400px]'>
          <PostCard
            id={post.id}
            title={post.title}
            description={post.description}
            keywords={post.keywords}
            author={post.author}
            cover_image={post.cover_image}
            created_at={post.created_at}
            ai_generated={post.ai_generated}
          />
        </div>
      ))}
    </div>
  ) : (
    <div className='min-h-[400px] w-full flex flex-col gap-4 justify-start font-bold items-center mt-10'>
      <p>{`Posts related to "${keyword}" keyword not found!`}</p>
    </div>
  );
}

export default PostView;
