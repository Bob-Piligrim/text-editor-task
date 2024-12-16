import React from "react";
import "./ResultDisplay.css";

interface ResultDisplayProps {
  result: { status: string; output: string } | null;
  error: { status: string; output: string } | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, error }) => {
  return (
    <div className="console">
      <h2>Console</h2>
      {result || error ? (
        <div className="req-style">
          {result && (
            <div className="error-style">
              <div>{result.status}</div>
              <pre>{result.output}</pre>
            </div>
          )}
          {error && (
            <div className="result-style">
              <div>{error?.status}</div>
              <pre>{error?.output}</pre>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ResultDisplay;
