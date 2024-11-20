import PostEditor from '@/src/components/PostEditor';
// import Notes from '@/src/components/Notes';

function NewPost() {
  return (
    <div className='min-h-[calc(100vh-48px)] w-full  pb-10'>
      <PostEditor />
      {/* <Notes /> */}
    </div>
  );
}

export default NewPost;
