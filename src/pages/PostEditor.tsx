import TipTap from '@/src/components/Tiptap/TipTap';
import { useState } from 'react';
import { useInsertPost } from '@/api/posts';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import MainLoading from '@/src/components/MainLoading';
import parse from 'html-react-parser';

function PostEditor() {
  const { profile, loading, isAdmin } = useAuth();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [description, setDescription] = useState('');
  const [isAiGenerated, setIsAiGenerated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const { mutate: insertPost } = useInsertPost();

  const onCreate = (e: React.FormEvent) => {
    e.preventDefault();

    if (!profile) return;

    const newPost = {
      profile_id: profile.id,
      title: title,
      description,
      content,
      keywords: keywords
        .split(',')
        .map(keyword => keyword.trim())
        .filter((keyword: string) => keyword.trim() !== '')
        .slice(0, 4),
      cover_image: coverImage,
      author: profile.username,
      ai_generated: isAiGenerated,
    };
    insertPost(newPost, {
      onSuccess: () => {
        setIsSubmitted(true);
      },
      onError: () => {
        alert('Failed to insert post');
      },
    });
  };

  const onPreview = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPreview(prev => !prev);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  if (loading) return <MainLoading />;
  if (isSubmitted) return <Navigate replace to='/' />;

  return (
    <div className='min-h-[calc(100vh-48px)] w-full  pb-10'>
      <form
        onSubmit={isAdmin ? onCreate : onPreview}
        className='max-w-full flex flex-col mx-auto pt-10 mb-10'
      >
        <div className='w-full sm:w-1/2 my-5 grid grid-cols-8 gap-2'>
          <label
            htmlFor='author'
            className='col-span-2 flex items-center text-nowrap'
          >
            Author
          </label>
          <input
            type='text'
            id='author'
            name='author'
            maxLength={50}
            value={profile?.username || 'Guest'}
            placeholder='Author'
            disabled
            className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-6 flex items-center'
          />

          <label
            htmlFor='header'
            className='col-span-2 flex items-center text-nowrap'
          >
            Header
          </label>
          <input
            type='text'
            id='header'
            name='header'
            value={title}
            maxLength={50}
            placeholder='Header'
            onChange={e => setTitle(e.target.value)}
            required
            className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-6 flex items-center'
          />
          <label
            htmlFor='description'
            className='col-span-2 flex items-center text-nowrap'
          >
            Description
          </label>
          <input
            type='text'
            id='description'
            name='description'
            value={description}
            maxLength={100}
            placeholder='Description'
            onChange={e => setDescription(e.target.value)}
            required
            className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-6 flex items-center'
          />
          <label
            htmlFor='keywords'
            className='col-span-2 flex items-center text-nowrap'
          >
            Keywords
          </label>
          <input
            type='text'
            id='keywords'
            name='keywords'
            value={keywords}
            maxLength={50}
            placeholder='Comma separated keywords up to 4'
            onChange={e => setKeywords(e.target.value)}
            required
            className='pl-2 py-1 bg-white border border-secondary focus:outline-secondary col-span-6 flex items-center'
          />
          <label
            htmlFor='file'
            className='col-span-2 flex items-center text-nowrap'
          >
            Cover Image
          </label>
          <input
            type='file'
            id='file'
            name='file'
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
            className='bg-white border border-secondary focus:outline-secondary col-span-4 flex items-center'
          />
          <label
            htmlFor='ai_generated'
            className='col-span-1 flex items-center text-nowrap justify-end'
          >
            AI
          </label>
          <input
            type='checkbox'
            id='ai_generated'
            name='ai_generated'
            checked={isAiGenerated}
            onChange={e => setIsAiGenerated(e.target.checked)}
            className='w-6 accent-secondary col-span-1 hover:accent-primary border border-secondary justify-self-end'
          />
          <button
            type='submit'
            className='flex h-[3rem] items-center justify-center font-bold border bg-secondary text-primary col-span-8 hover:bg-primary hover:text-fourth'
          >
            {isAdmin ? 'Create' : 'Preview'}
          </button>
        </div>

        <TipTap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </form>
      {isPreview && (
        <>
          <div className='w-full drop-shadow-2xl shadow-2xl p-4'>
            <div className='relative w-full p-4 overflow-hidden flex flex-col min-h-[16rem] items-center justify-center '>
              <h1 className='text-4xl font-bold bg-secondary text-fourth px-2'>
                {title}
              </h1>
              <div className='flex items-center justify-start gap-4 mt-2'>
                <p className='bg-secondary text-fourth px-2'>
                  by {profile?.username || 'Guest'}
                </p>
                <p className='bg-secondary text-fourth px-2'>
                  on {new Date().toLocaleDateString()}
                </p>
              </div>
              <img
                src={coverImage}
                className='absolute top-0 left-0 -z-10 object-cover blur-sm'
              />
            </div>
            <div className='ProseMirror whitespace-pre-line px-6 py-4 bg-fourth'>
              {parse(content)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostEditor;
