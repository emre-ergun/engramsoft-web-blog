import { CiSearch } from 'react-icons/ci';
import Qoute from '@/src/components/Qoute';
import PostView from '@/src/components/PostView';
import { useRef, useState } from 'react';
import PostViewAll from '@/src/components/PostViewAll';

function Home() {
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 mt-10'>
      <Qoute />
      <div className='flex items-center justify-center my-10 w-full'>
        <form
          onSubmit={e => {
            e.preventDefault();
            setKeyword(inputRef.current?.value.toLowerCase() || '');
          }}
          className='w-full flex items-center justify-center'
        >
          <div className='relative h-12 w-full sm:w-4/5 shadow-lg rounded-full'>
            <input
              ref={inputRef}
              id='search'
              name='search'
              type='text'
              placeholder='search for posts'
              className='h-full w-full pl-2 text-center rounded-full border border-secondary focus:outline-secondary'
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
      {keyword !== '' ? <PostView keyword={keyword} /> : <PostViewAll />}
      <div className='flex items-center justify-center mt-6 '>
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
}

export default Home;
