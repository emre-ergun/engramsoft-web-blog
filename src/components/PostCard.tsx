import { Post } from '@/lib/types';

type PostCardProps = Post & {
  style?: string;
};

function PostCard({
  id,
  title,
  content,
  keywords,
  author,
  timestamp,
}: PostCardProps) {
  const newDate = new Date(timestamp).toLocaleDateString();

  return (
    <div className='group relative flex flex-col bg-fourth shadow-md p-2 h-full'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden group-hover:scale-[1.05] transition-all duration-500'>
        <img
          src={`https://picsum.photos/1920/1080.webp?t=${id}`}
          className='object-cover h-full w-full'
        ></img>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-secondary opacity-60 group-hover:opacity-90 group-hover:scale-x-[1.05] group-hover:scale-y-[1.15] transition-all duration-500'></div>
      <div className='flex flex-col h-full justify-end z-10'>
        <h2 className='text-md font-bold line-clamp-1'>{title}</h2>
        <p className='line-clamp-1'>{content}</p>
        <div className='flex text-sm items-center justify-end gap-4 mt-2'>
          <p>by {author}</p>
          <p>on {newDate}</p>
        </div>
        <ul className='absolute hidden flex-col items-end top-2 right-2 z-10 gap-2 sm:group-hover:flex'>
          {keywords.map(keyword => (
            <li
              key={keyword}
              className='bg-secondary text-fourth px-2 py-1 text-xs opacity-80'
            >
              #{keyword}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostCard;
