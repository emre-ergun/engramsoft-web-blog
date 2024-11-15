import { mockPostCards } from '@/lib/mockData';
import PostCard from '../components/PostCard';

function Home() {
  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center mt-10'>
      <div className='h-[400px] border border-primary'>
        <PostCard {...mockPostCards[0]} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {mockPostCards.map((post, index) => (
          <div key={index} className='h-[200px]'>
            <PostCard
              title={post.title}
              content={post.content}
              keywords={post.keywords}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
