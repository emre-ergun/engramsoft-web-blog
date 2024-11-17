import { mockPostCards } from '@/lib/mockData';
import PostCard from '../components/PostCard';
import { BsArrowRight } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { GoDash } from 'react-icons/go';
import { useState } from 'react';
import { Post } from '@/lib/types';
import { useAuth } from '@/context/AuthContext';

function Home() {
  const { session } = useAuth();
  const [postCards, setPostcards] = useState<Post[]>(mockPostCards.slice(0, 7));
  const [allLoaded, setAllLoaded] = useState(false);

  const loadMoreHandle = () => {
    const currentLength = postCards.length;
    if (currentLength >= mockPostCards.length) {
      setAllLoaded(true);
      return;
    }
    const additionalPosts = mockPostCards.slice(
      currentLength,
      currentLength + 5
    );
    setPostcards([...postCards, ...additionalPosts]);
  };

  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center mt-10'>
      <div className='my-10'>
        <p className='text-4xl font-bold'>
          Hello {session ? session.user.email?.split('@')[0] : 'Guest'} 👋🏻
        </p>
      </div>
      <div className='flex items-center justify-center my-5 w-full'>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log('submitted');
          }}
          className='w-full flex items-center justify-center'
        >
          <div className='relative h-12 w-full shadow-lg'>
            <input
              id='search'
              name='search'
              type='text'
              placeholder='search for posts'
              className='h-full w-full pl-2 text-center border border-secondary focus:outline-secondary'
              maxLength={100}
            ></input>
            <button
              type='submit'
              className='absolute right-2 top-1/2 -translate-y-[50%] text-3xl'
            >
              <CiSearch />
            </button>
          </div>
        </form>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {postCards.map(post => (
          <div key={post.id} className='min-h-[400px]'>
            <PostCard {...post} />
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-6 '>
        <button
          onClick={loadMoreHandle}
          className='group flex items-center justify-center gap-1 cursor-pointer'
          disabled={allLoaded}
        >
          {allLoaded && (
            <GoDash className='text-lg group-hover:-translate-x-1 transition-all duration-300' />
          )}
          <p className='text-lg'>{allLoaded ? 'No More Posts' : 'Load More'}</p>
          {allLoaded ? (
            <GoDash className='text-lg group-hover:translate-x-1 transition-all duration-300' />
          ) : (
            <BsArrowRight className='text-lg group-hover:translate-x-1 group-hover:rotate-90 transition-all duration-300' />
          )}
        </button>
      </div>
    </div>
  );
}

export default Home;
