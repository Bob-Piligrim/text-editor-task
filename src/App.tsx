import React, { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";

import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import TaskScreen from "./components/TaskScreen/TaskScreen";
import SupportUs from "./components/SupportUs/SupportUs";

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>("python");
  const [code, setCode] = useState<string>('print("Hello, World!")');
  const [result, setResult] = useState<{
    status: string;
    output: string;
  } | null>(null);
  const [error, setError] = useState<{ status: string; output: string } | null>(
    null
  );

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);

    switch (lang) {
      case "python":
        setCode('print("Hello, World!")');
        break;
      case "go":
        setCode(
          'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}'
        );
        break;
    }
  };

  const runImitation = async () => {
    console.log(`этот код: ${code}`);
    try {
      setTimeout(() => {
        const mockData = [
          { status: "Success", output: "Hello, world!\n" },
          { status: "Error", output: "SyntaxError: Unexpected token" },
        ];

        if (code.length > 0) {
          const successItem = mockData.find(
            (item: any) => item.status === "Success"
          );
          setResult(
            successItem
              ? { status: successItem.status, output: successItem.output }
              : null
          );
          setError(null);
        } else {
          const errorItem = mockData.find(
            (item: any) => item.status === "Error"
          );
          setError(
            errorItem
              ? { status: errorItem.status, output: errorItem.output }
              : null
          );
          setResult(null);
        }
      }, 2000);
    } catch (err) {
      setError({
        status:
          "An error occurred while running the code.\nВероятно не поднят сервер.",
        output: "Нет выходных данных",
      });
      setResult(null);
    }
  };

  const clearConsole = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="app-container">
      <div className="title-container">
        <div className="title">
          <h1>Code Editor</h1>
        </div>
        <div className="act-container">
          <LanguageSelector
            selectedLanguage={language}
            setLanguage={handleLanguageChange}
          />
          <button onClick={runImitation}>Run</button>
          <button className="clearButton" onClick={clearConsole}>
            Clear
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="taskScreen-container shadow">
          <TaskScreen />
        </div>
        <div className="result-container">
          <div className="codeEditor-container shadow">
            <CodeEditor code={code} setCode={setCode} language={language} />
          </div>
          <div className="resultDisplay-container shadow">
            <ResultDisplay result={result} error={error} />
          </div>
        </div>
      </div>
      <SupportUs />
    </div>
  );
};

export default App;
