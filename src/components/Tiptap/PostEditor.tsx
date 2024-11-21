import TipTap from '@/src/components/Tiptap/TipTap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function PostEditor() {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      content: content,
    };

    console.log(data);
    setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-full flex flex-col mx-auto pt-10 mb-10'
    >
      <div className='text-3xl text-center mb-10'>Editor</div>
      <div className='w-1/2 my-5 grid grid-cols-4 gap-2 '>
        <label htmlFor='header' className='col-span-1 flex items-center'>
          Header:
        </label>
        <input
          type='text'
          id='header'
          name='header'
          maxLength={50}
          required
          className='bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label htmlFor='file' className='col-span-1 flex items-center'>
          Cover Photo:
        </label>
        <input
          type='file'
          id='file'
          name='file'
          required
          accept='image/png, image/gif, image/jpeg'
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
