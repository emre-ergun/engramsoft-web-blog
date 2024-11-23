import TipTap from '@/src/components/Tiptap/TipTap';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Notes from '../Notes';

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
    const updatedData = [data];
    localStorage.setItem('myData', JSON.stringify(updatedData));
    setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-full flex flex-col mx-auto pt-10 mb-10'
    >
      <div className='text-3xl text-center mb-10'>Editor</div>
      <div className='w-full sm:w-1/2 my-5 grid grid-cols-4 gap-2 '>
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
          required
          className='bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
        <label
          htmlFor='file'
          className='col-span-1 flex items-center text-nowrap'
        >
          Cover Photo
        </label>
        <input
          type='file'
          id='file'
          name='file'
          required
          accept='image/*'
          className='bg-white border border-secondary focus:outline-secondary col-span-3 flex items-center'
        />
      </div>
      <TipTap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
      <Notes />
    </form>
  );
}

export default PostEditor;
