import React from 'react'
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichEditorExample from './example-copy';

const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return <RichEditorExample />;
}

export default TextEditor