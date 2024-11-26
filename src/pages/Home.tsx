import PostCard from '../components/PostCard';
import { CiSearch } from 'react-icons/ci';
import Qoute from '@/src/components/Qoute';
import MainLoading from '@/src/components/MainLoading';
import { usePostLists } from '@/api/posts';

function Home() {
  const { data: posts, error, isLoading } = usePostLists();

  if (isLoading)
    return (
      <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 items-center justify-center mt-10'>
        <MainLoading />
      </div>
    );
  if (error)
    return (
      <div className='h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center items-center mt-10'>
        <h1>Failed to fetch posts</h1>
      </div>
    );
  return (
    <div className='min-h-[calc(100vh-48px)] w-full flex flex-col gap-4 justify-center mt-10'>
      <Qoute />
      <div className='flex items-center justify-center my-10 w-full'>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log('submitted');
          }}
          className='w-full flex items-center justify-center'
        >
          <div className='relative h-12 w-full sm:w-4/5 shadow-lg rounded-full'>
            <input
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {posts?.map(post => (
          <div key={post.id} className='min-h-[400px]'>
            <PostCard
              id={post.id}
              title={post.title}
              description={post.description}
              keywords={post.keywords}
              author={post.author}
              cover_image={post.cover_image}
              created_at={post.created_at}
            />
          </div>
        ))}
      </div>
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
