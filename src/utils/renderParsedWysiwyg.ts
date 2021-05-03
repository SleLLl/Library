import parse from 'html-react-parser';
import domToReact from 'html-react-parser/lib/dom-to-react';

export const renderParsedWysiwyg = (
  doc?: string | null,
): ReturnType<typeof domToReact> | null => {
  if (!doc) return null;
  const options = {};
  return parse(doc, options);
};
