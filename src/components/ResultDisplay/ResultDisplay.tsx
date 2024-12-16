import React from "react";
import "./ResultDisplay.css";

interface ResultDisplayProps {
  result: {status: string, output: string} | null;
  error: {status: string, output: string} | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, error }) => {
  return (
    <div className="result-container">
      <h2>Console</h2>
      <div className="req-style">
        {result ? (
          <div className="error-style">
            <div>{result.status}</div>
            <pre>{result.output}</pre>
          </div>
        ) : (
          <div className="result-style">
            <div>{error?.status}</div>
            <pre>{error?.output}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;
