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
    <div>
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
          fontSize: 22,
          lineHeight: 30,
          wordWrap: "on",
          minimap: { enabled: true },
        }}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
