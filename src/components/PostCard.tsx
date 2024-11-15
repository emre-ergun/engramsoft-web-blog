import { Post } from '@/lib/types';

type PostCardProps = Post & {
  style?: string;
};

function PostCard({ title, content, keywords }: PostCardProps) {
  return (
    <div className='group relative flex flex-col bg-fourth shadow-md border border-primary p-2 h-full'>
      <div className='h-1/2'></div>
      <div className='flex flex-col h-1/2 justify-end'>
        <h2 className='text-md font-bold line-clamp-1'>{title}</h2>
        <p className='line-clamp-1'>{content}</p>
        <ul className='absolute hidden flex-col items-end top-2 right-2 z-10 gap-2 sm:group-hover:flex'>
          {keywords.map(keyword => (
            <li
              key={keyword}
              className='bg-secondary text-fourth rounded-full px-2 py-1 text-xs'
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
