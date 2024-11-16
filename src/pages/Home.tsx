import { mockPostCards } from '@/lib/mockData';
import PostCard from '../components/PostCard';

function Home() {
  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center mt-10'>
      <div className='my-10'>
        <p className='text-4xl font-bold'>Hello There!</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {mockPostCards.map((post, index) => (
          <div key={index} className='min-h-[400px]'>
            <PostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
