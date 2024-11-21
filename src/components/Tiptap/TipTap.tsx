import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import History from '@tiptap/extension-history';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Code from '@tiptap/extension-code';
import Blockquote from '@tiptap/extension-blockquote';
import Youtube from '@tiptap/extension-youtube';
import Toolbar from '@/src/components/Tiptap/Toolbar';

type TipTapProps = {
  content: string;
  onChange: (newContent: string) => void;
};

function TipTap({ content, onChange }: TipTapProps) {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      History,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading.configure({ levels: [1, 2, 3] }),
      ListItem,
      BulletList,
      OrderedList,
      Code,
      Blockquote,
      Youtube.configure({
        inline: false,
        controls: false,
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl border border-secondary outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className='relative w-full'>
      <div className='sticky top-24 left-0 w-full mx-auto z-10 bg-fourth bg-opacity-70 backdrop-blur-[0.5rem]'>
        <Toolbar editor={editor} content={content} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

export default TipTap;
