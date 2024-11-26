import TipTap from '@/src/components/Tiptap/TipTap';
import { useState } from 'react';
import { useInsertPost } from '@/api/posts';
import { useAuth } from '@/context/AuthContext';

function PostEditor() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');

  const { profile, loading } = useAuth();
  const { mutate: insertPost } = useInsertPost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) {
      console.log('profile not found');
      return;
    }

    const newPost = {
      profile_id: profile.id,
      title: title,
      description,
      content,
      keywords: keywords,
      cover_image: coverImage,
      author: profile?.username,
    };
    insertPost(newPost);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleKeywords = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keywords = e.target.value.split(',');
    setKeywords(keywords.filter(keyword => keyword.trim() !== '').slice(0, 4));
  };

  if (loading) return;

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-full flex flex-col mx-auto pt-10 mb-10'
    >
      <div className='text-3xl text-center mb-10'>Editor</div>
      <div className='w-full sm:w-1/2 my-5 grid grid-cols-4 gap-2 '>
        <label
          htmlFor='Author'
          className='col-span-1 flex items-center text-nowrap'
        >
          Author
        </label>
        <input
          type='text'
          id='author'
          name='author'
          maxLength={50}
          value={profile?.username}
          placeholder='Author'
          disabled
          className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label
          htmlFor='header'
          className='col-span-1 flex items-center text-nowrap'
        >
          Header
        </label>
        <input
          type='text'
          id='header'
          name='header'
          maxLength={50}
          placeholder='Header'
          onChange={e => setTitle(e.target.value)}
          required
          className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label
          htmlFor='description'
          className='col-span-1 flex items-center text-nowrap'
        >
          Description
        </label>
        <input
          type='text'
          id='description'
          name='description'
          maxLength={100}
          placeholder='Description'
          onChange={e => setDescription(e.target.value)}
          required
          className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label
          htmlFor='keyword'
          className='col-span-1 flex items-center text-nowrap'
        >
          Keywords
        </label>
        <input
          type='text'
          id='keywords'
          name='keywords'
          maxLength={50}
          placeholder='Comma separated keywords up to 4'
          onChange={handleKeywords}
          required
          className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label
          htmlFor='file'
          className='col-span-1 flex items-center text-nowrap'
        >
          Cover Image
        </label>
        <input
          type='file'
          id='file'
          name='file'
          required
          accept='image/*'
          onChange={event => {
            const file = event.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = e => {
                const result = e.target?.result as string;
                const base64Data = result.split(',')[1];
                const newBase64Image = `data:${file.type};base64,${base64Data}`;
                const img = new Image();
                img.onload = () => {
                  setCoverImage(newBase64Image);
                };
                img.src = newBase64Image;
              };
              reader.readAsDataURL(file);
            }
          }}
          className='bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
      </div>
      <TipTap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
}

export default PostEditor;
