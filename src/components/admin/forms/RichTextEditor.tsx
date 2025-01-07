import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import DOMPurify from 'dompurify';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  error?: string;
}

const RichTextEditor = ({ value, onChange, error }: RichTextEditorProps) => {
  const handleEditorChange = (content: string) => {
    // Sanitize content before updating
    const sanitizedContent = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3',
        'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'span'
      ],
      ALLOWED_ATTR: ['href', 'target', 'rel', 'style'],
      ALLOWED_STYLES: ['text-decoration', 'text-align', 'font-weight', 'font-style']
    });
    onChange(sanitizedContent);
  };

  return (
    <div className="space-y-2">
      <Editor
        apiKey="gc5i5dgnkrgi8h4b3icsx2dyk7q1f56dmxvrai2rri58kubq"
        value={value}
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'charmap',
            'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'paste', 'wordcount', 'textpattern'
          ],
          toolbar: `
            undo redo | formatselect | 
            bold italic underline | alignleft aligncenter 
            alignright alignjustify | bullist numlist | 
            removeformat
          `,
          formats: {
            underline: { inline: 'u', exact: true }
          },
          content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: 14px }',
          skin: 'oxide-dark',
          content_css: 'dark',
          branding: false,
          promotion: false,
          statusbar: false,
        }}
        onEditorChange={handleEditorChange}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default RichTextEditor;