import { Post } from '@/lib/types';

type PostCardProps = Post & {
  style?: string;
};

function PostCard({
  title,
  content,
  keywords,
  author,
  timestamp,
}: PostCardProps) {
  const newDate = new Date(timestamp).toLocaleDateString();

  return (
    <div className='group relative flex flex-col bg-fourth shadow-md border border-primary p-2 h-full'>
      <div className='h-2/3 overflow-hidden group-hover:scale-[0.95] transition-all duration-300'>
        <img
          src='https://picsum.photos/1920/1080.webp?t=1'
          className='object-scale-cover w-full'
        ></img>
      </div>
      <div className='flex flex-col h-1/3 justify-end'>
        <h2 className='text-md font-bold line-clamp-1'>{title}</h2>
        <p className='line-clamp-1'>{content}</p>
        <div className='flex items-center justify-end gap-2 mt-2'>
          <p className='text-sm text-secondary'>{newDate}</p>{'--'}
          <p className='text-sm text-secondary'>{author}</p>
        </div>
        <ul className='absolute hidden flex-col items-end top-2 right-2 z-10 gap-2 sm:group-hover:flex'>
          {keywords.map(keyword => (
            <li
              key={keyword}
              className='bg-secondary text-fourth px-2 py-1 text-xs'
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
