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
    setCode(value || "");
  };

  return (
    <div className="editor-container">
      <Editor
        width=""
        height="100%"
        language={language}
        theme="vs-light"
        value={code}
        options={{
          selectOnLineNumbers: true,
          renderLineHighlight: 'all',
          automaticLayout: true,
          fontSize: 20,
          lineHeight: 20,
          wordWrap: "on",
        }}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
