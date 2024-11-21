import { type Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from 'lucide-react';

type ToolbarProps = {
  editor: Editor | null;
  content: string;
};

function Toolbar({ editor, content }: ToolbarProps) {
  if (!editor) return null;

  return (
    <div className='relative px-4 py-3 flex justify-between items-center gap-5 w-full flex-wrap border border-secondary'>
      <div className='flex justify-start items-center gap-5 w-full flex-wrap text-secondary'>
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
            <Undo className='w-5 h-5' />
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
            <Redo className='w-5 h-5' />
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
            <Bold className='w-5 h-5' />
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
            <Italic className='w-5 h-5' />
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
            <Underline className='w-5 h-5' />
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
            <Strikethrough className='w-5 h-5' />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}
            className={
              editor.isActive('heading', { level: 1 })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
            }
          >
            <Heading1 className='w-5 h-5' />
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
            <Heading2 className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().toggleHeading({ level: 3 }).run();
            }}
            className={
              editor.isActive('heading', { level: 3 })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <Heading3 className='w-5 h-5' />
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
            <List className='w-5 h-5' />
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
            <ListOrdered className='w-5 h-5' />
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
            <Code className='w-5 h-5' />
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
            <Quote className='w-5 h-5' />
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
