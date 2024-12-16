const simulateServerResponse = (code: string, language: string) => {
  return new Promise<{ success: boolean; output?: string; error?: string }>(
    (resolve) => {
      setTimeout(() => {
        if (code.includes("error")) {
          resolve({ success: false, error: "Runtime error" });
        } else {
          resolve({
            success: true,
            output: `Output from ${language}: ${code}`,
          });
        }
      }, 2000);
    }
  );
};

export default simulateServerResponse;