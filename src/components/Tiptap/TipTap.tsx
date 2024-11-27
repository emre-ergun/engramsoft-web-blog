import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import History from '@tiptap/extension-history';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Code from '@tiptap/extension-code';
import CodeBlock from '@tiptap/extension-code-block';
import HardBreak from '@tiptap/extension-hard-break';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Blockquote from '@tiptap/extension-blockquote';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import Toolbar, { BubbleToolbar } from '@/src/components/Tiptap/Toolbar';

type TipTapProps = {
  content: string;
  onChange: (newContent: string) => void;
};

function TipTap({ content, onChange }: TipTapProps) {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    content,
    extensions: [
      Document,
      Text,
      Paragraph,
      History,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      ListItem,
      BulletList,
      OrderedList,
      Code,
      CodeBlock,
      HardBreak,
      HorizontalRule,
      Blockquote,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':')
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);
            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }
            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto'];
            const protocol = parsedUrl.protocol.replace(':', '');

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }
            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map(p =>
              typeof p === 'string' ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }
            // disallowed domains
            const disallowedDomains = [
              'example-phishing.com',
              'malicious-site.net',
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }
            // all checks have passed
            return true;
          } catch (error) {
            console.log(error);
            return false;
          }
        },
        shouldAutoLink: url => {
          try {
            // construct URL
            const parsedUrl = url.includes(':')
              ? new URL(url)
              : new URL(`https://${url}`);
            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = [
              'example-no-autolink.com',
              'another-no-autolink.com',
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch (error) {
            console.log(error);
            return false;
          }
        },
      }),
      Image.configure({
        // allowBase64: true,
        inline: false,
      }),
      Youtube.configure({
        inline: false,
        controls: false,
      }),
    ],
    editorProps: {
      attributes: {
        spellcheck: 'false',
        class: 'border border-secondary outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className='relative w-full prose'>
      <div className='sticky top-24 left-0 w-full mx-auto z-10 bg-fourth bg-opacity-70 backdrop-blur-[0.5rem]'>
        <Toolbar editor={editor} />
      </div>
      <BubbleMenu editor={editor}>
        <BubbleToolbar editor={editor} />
      </BubbleMenu>
      <div className='bg-white'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TipTap;
