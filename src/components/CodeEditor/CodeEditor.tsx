import React from "react";
import Editor from "@monaco-editor/react";
import "./CodeEditor.css";

interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, language }) => {

  const handleCodeChange = (value?: string) => {
    setCode(value || '');
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    automaticLayout: true,
  };

  return (
    <div>
      <div className="editor-container">
        <Editor
          width="100%"
          height="20vh"
          language={language}
          theme="vs-dark"
          value={code}
          options={editorOptions}
          onChange={handleCodeChange}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
