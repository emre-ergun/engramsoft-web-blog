import { Post } from '@/lib/types';
import { Link } from 'react-router-dom';

type PostCardProps = Post & {
  style?: string;
};

function PostCard({
  id,
  title,
  keywords,
  author,
  cover_image,
  created_at,
  description,
  ai_generated,
}: PostCardProps) {
  const newDate = new Date(created_at).toLocaleDateString();

  return (
    <div className='group relative flex flex-col bg-fourth shadow-xl p-2 h-full text-fourth'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden group-hover:scale-[1.05] transition-all duration-500'>
        <img
          src={
            cover_image
              ? cover_image
              : `https://picsum.photos/1920/1080.webp?t=${id}`
          }
          className='object-cover h-full w-full blur-0 group-hover:blur-[1px] transition-all duration-500'
        ></img>
      </div>
      <div className='absolute bottom-0 left-0 w-full h-1/3 bg-secondary opacity-70 group-hover:opacity-90 group-hover:scale-x-[1.05] group-hover:scale-y-[1.15] transition-all duration-500'></div>
      <Link
        to={`/post/${id}/${title.replace(/ /g, '-').toLowerCase()}`}
        className='flex flex-col h-full justify-end z-10'
      >
        <h2 className='text-md font-bold line-clamp-1'>{title}</h2>
        <p className='line-clamp-1'>{description}</p>
        <div className='flex text-sm items-center justify-end gap-4 mt-2'>
          <p>by {author}</p>
          <p>on {newDate}</p>
        </div>
        {ai_generated && (
          <div className='absolute top-2 left-2'>
            <p className='bg-secondary text-fourth px-2 py-1 text-xs'>
              ai_generated
            </p>
          </div>
        )}
        <ul className='absolute hidden flex-col items-end top-2 right-2 z-10 gap-2 sm:group-hover:flex'>
          {keywords.map((keyword, idx) => (
            <li
              key={idx}
              className='bg-secondary text-fourth px-2 py-1 text-xs'
            >
              #{keyword}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default PostCard;
