import React, { useState } from "react";

import interpreter from "../../node_modules/@converso-empire/conso/packages/interpreter/dist/index.js";

import CodeEditor from "./CodeEditor";
import Terminal from "./Terminal";


const initialCode = `
start conso
 conso print "Hello World";
 
  conso a = 3;
  conso b = 0;

  conso while (b < 5) {
    conso print b;

    conso if (b == a) {
      conso print "b is equal to a";
    } conso else-if (b == 0) {
      conso print "b is equal to zero";
    }

    b += 1;
  }

end conso
`;

const Code = (props: Props) => {
  const {} = props;
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<{ value: string; isError: boolean }[]>(
    []
  );
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleChange = (newCode: string) => {
    setCode(newCode);
  };

  const executeCode = () => {
    const originalConsoleLog = console.log;
    const outputList: { value: string; isError: boolean }[] = [];
    let isExecutionSuccess = true;
  
    console.log = function (...args: unknown[]) {
      outputList.push({ value: args.map(String).join("\n"), isError: false });
    };
  
    try {
      interpreter.interpret(code);
    } catch (e) {
      isExecutionSuccess = false;
      if (e instanceof Error) {
        outputList.push({ value: e.message, isError: true });
      } else {
        outputList.push({ value: String(e), isError: true });
      }
    } finally {
      setIsSuccess(isExecutionSuccess);
      setOutput(outputList);
      console.log = originalConsoleLog;
    }
  };

  const clearCode = () => {
    setCode("");
    setIsSuccess(null);
    setOutput([]);
  };

  return (
    <div id="playground" className="mx-4 sm:mx-12">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl my-4">
          Playground
        </h2>
        <div className="flex">
          <button
            disabled={!code}
            onClick={executeCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md text-white bg-bhagwa-600 hover:bg-bhagwa-700 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3 disabled:opacity-40"
          >
            Run
          </button>

          <button
            onClick={clearCode}
            className="mx-2 flex items-center justify-center px-8 border border-transparent text-base font-medium rounded-md text-bhagwa-700 bg-bhagwa-300 hover:bg-bhagwa-400 md:text-lg md:px-10 my-4 sm:my-8 sm:py-3"
          >
            Clear
          </button>
        </div>
      </div>
      <CodeEditor handleChange={handleChange} code={code} />
      <Terminal output={output} isSuccess={isSuccess} />
    </div>
  );
};
type Props = {};
export default React.memo(Code);
