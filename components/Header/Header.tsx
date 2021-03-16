import * as React from 'react';

interface HeaderProps {
  // user?: User;
}

export function HeaderMenu(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const [isSearch, setIsSearch] = React.useState(false);
  const toggleSearch = () => {
    setIsOpen(!isSearch)
  }

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => toggle()}
              className="
              bg-white rounded-md 
              p-2 inline-flex items-center 
              justify-center 
              text-gray-400 
              hover:text-gray-500 
              hover:bg-gray-100 
              focus:outline-none 
              focus:ring-2 
              focus:ring-inset 
              focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-8  uppercase">
            <a
              href="#"
              className="text-xs font-medium text-blue-900 hover:text-blue-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xs font-medium text-blue-900 hover:text-blue-900"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-xs font-medium text-blue-900 hover:text-blue-900"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-xs font-medium text-blue-900 hover:text-blue-900"
            >
              News
            </a>
            <a
              href="#"
              className="text-xs font-medium text-blue-900 hover:text-blue-900"
            >
              Location
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0` uppercase">
            {/* <input type="text" className="h-8 w-50 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none mr-2" placeholder="Search anything..." /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mt-0 mr-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-blue-900 hover:text-gray-900 underline"
            >
              Login
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-700 hover:to-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>

        {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
        <div className={`absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right ${isOpen ? 'block' : 'hidden'}`}>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => toggle()}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 uppercase">
                <nav className="grid grid-cols-1 gap-7">
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Home
                    </div>
                  </a>

                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div className="ml-4 text-base font-medium text-gray-900">
                      About Us
                    </div>
                  </a>

                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Portfolio
                    </div>
                  </a>

                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div className="ml-4 text-base font-medium text-gray-900">
                      News
                    </div>
                  </a>

                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                  >
                    <div className="ml-4 text-base font-medium text-gray-900">
                      Location
                    </div>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
