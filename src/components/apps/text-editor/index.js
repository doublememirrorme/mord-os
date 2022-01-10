import React from 'react'
import { EditorState, ContentState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichEditorExample from './example-copy';

const TextEditor = ({ data = '', file }) => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createWithContent(ContentState.createFromText(data)),
  )

  return (
    <RichEditorExample
      file={file}
      editorState={editorState}
      onChange={setEditorState}
    />);
}

export default TextEditor