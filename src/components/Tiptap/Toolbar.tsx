import { type Editor } from '@tiptap/react';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaHeading,
  FaListUl,
  FaListOl,
  FaCode,
  FaQuoteRight,
  FaYoutube,
} from 'react-icons/fa6';
import { FaUndo, FaRedo } from 'react-icons/fa';

type ToolbarProps = {
  editor: Editor | null;
  content: string;
};

function Toolbar({ editor, content }: ToolbarProps) {
  if (!editor) return null;

  return (
    <div className='relative px-4 py-3 flex justify-between items-center gap-5 w-full flex-wrap border border-secondary'>
      <div className='flex justify-start items-center gap-2 w-full flex-wrap text-secondary'>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().undo().run();
            }}
            className={
              editor.isActive('undo')
                ? ''
                : 'text-secondary border border-secondary rounded-tl-md rounded-bl-md hover:bg-secondary hover:text-fourth hover:border-fourth p-1'
            }
          >
            <FaUndo className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().redo().run();
            }}
            className={
              editor.isActive('redo')
                ? 'bg-secondary text-fourth p-1'
                : 'text-secondary border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth hover:border-fourth p-1'
            }
          >
            <FaRedo className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={
              editor.isActive('heading', { level: 3 })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
            }
          >
            <FaHeading className='w-3 h-3' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}
            className={
              editor.isActive('heading', { level: 2 })
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <FaHeading className='w-4 h-4' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={
              editor.isActive('heading', { level: 1 })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaHeading className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleBold().run();
            }}
            className={
              editor.isActive('bold')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
            }
          >
            <FaBold className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleItalic().run();
            }}
            className={
              editor.isActive('italic')
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <FaItalic className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleUnderline().run();
            }}
            className={
              editor.isActive('underline')
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <FaUnderline className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleStrike().run();
            }}
            className={
              editor.isActive('strike')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaStrikethrough className='w-5 h-5' />
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleBulletList().run();
            }}
            className={
              editor.isActive('bulletList')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
            }
          >
            <FaListUl className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleOrderedList().run();
            }}
            className={
              editor.isActive('orderedList')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaListOl className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleCode().run();
            }}
            className={
              editor.isActive('code')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary rounded-tl-md rounded-bl-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaCode className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleBlockquote().run();
            }}
            className={
              editor.isActive('blockquote')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tr-md rounded-br-md'
            }
          >
            <FaQuoteRight className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              const url = prompt('Enter YouTube URL');
              if (url) {
                editor.commands.setYoutubeVideo({
                  src: url,
                  width: 320,
                  height: 240,
                });
              }
            }}
            className={
              editor.isActive('blockquote')
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <FaYoutube className='w-5 h-5' />
          </button>
        </div>
      </div>
      {content && (
        <button
          type='submit'
          className='absolute -top-8 right-0 h-7 w-12 flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-fourth px-1'
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Toolbar;
