import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">start conso</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">end conso</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

start conso
  // Write code here
end conso

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">conso</code>.
      </>
    ),
    code: `start conso
    conso a = 10;
    conso b = "two";
    conso c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
end conso
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">null</code>.{" "}
        <code className="language-cpp">true</code> and{" "}
        <code className="language-cpp">false</code> are the boolean values.
      </>
    ),
    code: `start conso
    conso a = 10;
    conso b = 10 + (15*20);
    conso c = "two";
    conso d = 'ok';
    conso e = null;
    conso f = true;
    conso g = false;
end conso
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">conso print</code> to print anything to
        console.
      </>
    ),
    code: `start conso
    conso print "Hello World";
    conso a = 10;
    {
       conso b = 20;
       conso print a + b;
    }
    conso print 5, 'ok', null , true , false;
end conso
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        conso supports if-else-if ladder construct , <code className="language-cpp">conso if</code> block will execute if condition is <code className="language-cpp">true</code>, otherwise one of the subsequently added <code className="language-cpp">conso else-if</code> blocks will execute if their respective condition is <code className="language-cpp">true</code>, and the <code className="language-cpp">conso else</code> block will eventually execute if all of the above conditions are <code className="language-cpp">false</code>.
      </>
    ),
    code: `start conso
    conso a = 10;
    conso if (a < 20) {
      conso print "a is less than 20";
    } conso else-if ( a < 25 ) {
      conso print "a is less than 25";
    } conso else {
      conso print "a is greater than or equal to 25";
    }
end conso
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">conso while</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">true</code>. If the condition becomes <code className="language-cpp">false</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">stop conso</code> to break the loop and <code className="language-cpp">conso next</code> to continue within loop.
      </>
    ),
    code: `start conso
    conso a = 0;
    conso while (a < 10) {
      a += 1;
      conso if (a == 5) {
        conso print "printing from inside loop: ", a;
        conso next;
      }
      conso if (a == 6) {
        stop conso;
      }
      conso print a;
    }
    conso print "done";
end conso
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            conso is proficient in handling basic programming constructs. Here are
            some examples to get you started.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
