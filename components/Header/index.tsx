import ConsoLogo from "./consoLogo";


export default function Header() {
  return (
    <div className="relative overflow-hidden header flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="hidden">conso</h1>
              <div className="p-4">
                <ConsoLogo />
              </div>
              <p className="mt-3 text-center text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A modern multi-paradigm programming language by Converso Empire
              </p>
              <p className="mt-2 text-center text-sm text-gray-400 italic">
                &ldquo;Empire of Innovation, Creativity & Intelligence.&rdquo;
              </p>
              <div className="prose text-center pt-4 pb-4">
                {" "}
                <code className="language-js">npm install -g @converso-empire/conso</code>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#playground"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-bhagwa-600 hover:bg-bhagwa-700 md:py-4 md:text-lg md:px-10"
                  >
                    Playground
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Converso-Empire/conso"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-bhagwa-700 bg-bhagwa-300 hover:bg-bhagwa-400 md:py-4 md:text-lg md:px-10"
                  >
                    View Source
                  </a>
                </div>
              </div>
              <div className="text-center text-gray-300 pt-6">
                <div className="mb-2">
                  Made with ❤️ by
                  <a
                    href="http://conversoempire.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-bhagwa-700 font-bold"> Converso Empire</span>
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  <a
                    href="https://github.com/Converso-Empire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bhagwa-500"
                  >
                    GitHub
                  </a>
                  {" • "}
                  <a
                    href="http://conversoempire.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bhagwa-500"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
