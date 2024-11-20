import TipTap from '@/src/components/TipTap';
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
    // const existingDataString = localStorage.getItem('myData');
    // const existingData = existingDataString
    //   ? JSON.parse(existingDataString)
    //   : [];
    // const updatedData = [...existingData, data];
    // localStorage.setItem('myData', JSON.stringify(updatedData));
    // setContent('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-full w-full grid place-items-center mx-auto pt-10 mb-10'
    >
      <div className='text-3xl text-center mb-10'>Editor</div>
      <TipTap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
}

export default PostEditor;
