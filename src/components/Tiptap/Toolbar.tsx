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
  FaLink,
  FaLinkSlash,
  FaYoutube,
} from 'react-icons/fa6';
import { FaUndo, FaRedo } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';
import { ImPagebreak } from 'react-icons/im';
import { VscHorizontalRule } from 'react-icons/vsc';
import {
  GrTextAlignLeft,
  GrTextAlignCenter,
  GrTextAlignRight,
} from 'react-icons/gr';

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
              editor.chain().focus().setTextAlign('left').run();
            }}
            className={
              editor.isActive({ textAlign: 'left' })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
            }
          >
            <GrTextAlignLeft className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().setTextAlign('center').run();
            }}
            className={
              editor.isActive({ textAlign: 'center' })
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <GrTextAlignCenter className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().setTextAlign('right').run();
            }}
            className={
              editor.isActive({ textAlign: 'right' })
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <GrTextAlignRight className='w-5 h-5' />
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
              editor.chain().focus().toggleCodeBlock().run();
            }}
            className={
              editor.isActive('codeBlock')
                ? 'bg-secondary text-fourth p-1 border border-fourth '
                : 'text-secondary p-1 border border-secondary  hover:bg-secondary hover:text-fourth'
            }
          >
            <BiCodeBlock className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().setHardBreak().run();
            }}
            className={
              editor.isActive('hardBreak')
                ? 'bg-secondary text-fourth p-1 border border-fourth '
                : 'text-secondary p-1 border border-secondary  hover:bg-secondary hover:text-fourth'
            }
          >
            <ImPagebreak className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().setHorizontalRule().run();
            }}
            className={
              editor.isActive('horizontalRule')
                ? 'bg-secondary text-fourth p-1 border border-fourth '
                : 'text-secondary p-1 border border-secondary  hover:bg-secondary hover:text-fourth'
            }
          >
            <VscHorizontalRule className='w-5 h-5' />
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
              const previousUrl = editor.getAttributes('link').href;
              let url = window.prompt('URL', previousUrl);

              // cancelled
              if (url === null) {
                return;
              }

              if (!url.startsWith('http') && !url.includes(':')) {
                url = `https://${url}`;
              }

              // empty
              if (url === '') {
                editor
                  .chain()
                  .focus()
                  .extendMarkRange('link')
                  .unsetLink()
                  .run();

                return;
              }

              // update link
              editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: url })
                .run();
            }}
            className={
              editor.isActive('link')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
                : 'text-secondary p-1 border border-secondary rounded-tl-md rounded-bl-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaLink className='w-5 h-5' />
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              editor.chain().focus().unsetLink().run();
            }}
            className={
              editor.isActive('link')
                ? 'bg-secondary text-fourth p-1 border border-fourth'
                : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
            }
          >
            <FaLinkSlash className='w-5 h-5' />
          </button>
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
              editor.isActive('youtube')
                ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
                : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
            }
          >
            <FaYoutube className='w-5 h-5' />
          </button>
        </div>
      </div>
      {content && (
        <button
          type='submit'
          className='absolute -bottom-14 right-2 h-12 w-24 flex items-center justify-center border border-secondary text-secondary hover:bg-secondary hover:text-fourth px-1'
        >
          Create Post
        </button>
      )}
    </div>
  );
}

export function BubbleToolbar({ editor }: { editor: Editor | null }) {
  return (
    editor && (
      <div className='flex items-center justify-between bg-fourth rounded-md'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tl-md rounded-bl-md'
              : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth rounded-tl-md rounded-bl-md'
          }
        >
          <FaBold className='w-4 h-4' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-secondary text-fourth p-1 border border-fourth'
              : 'text-secondary p-1 border border-secondary hover:bg-secondary hover:text-fourth'
          }
        >
          <FaItalic className='w-4 h-4' />
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
          <FaUnderline className='w-4 h-4' />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? 'bg-secondary text-fourth p-1 border border-fourth rounded-tr-md rounded-br-md'
              : 'text-secondary p-1 border border-secondary rounded-tr-md rounded-br-md hover:bg-secondary hover:text-fourth'
          }
        >
          <FaStrikethrough className='w-4 h-4' />
        </button>
      </div>
    )
  );
}

export default Toolbar;
