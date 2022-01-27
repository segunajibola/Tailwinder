import React from 'react';
import './App.css';
import header from "./images/header.png";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl text-red-500 text-center">
      Hello world!
      </h1>
      <nav className="bg-gray-100 shadow-lg top-0 z-50 w-full fixed">
        <div className="max-w-7xl">
            <div className="flex justify-between text-gray-700">
                <div className="flex items-center py-2 px-0 space-x-7">
                    <a href="#" className="s p:-ml-6 md:-ml-0">
                      <i className="fas fa-wave-square text-blue-400 ml-6 mr-1 -mb-2"></i>
                      <span className="font-semibold text-lg">Tailwinder</span>
                    </a>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="relative inline-block text-left">
                        <div>
                            <button type="button" className="menu-button inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100" aria-expanded="true" aria-haspopup="true">
                                Components
                                {/* <!-- Heroicon name: solid/chevron-down --> */}
                                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    
                        {/* <!--
                        Dropdown menu, show/hide based on menu state.
                        Entering: "transition ease-out duration-100"
                            From: "transform opacity-0 scale-95"
                            To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                            From: "transform opacity-100 scale-100"
                            To: "transform opacity-0 scale-95"
                        --> */}
                        <div className="hidden menu origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1" role="none">
                                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                                <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Navbar</a>
                                <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Cards</a>
                                <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Headers</a>
                                <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Footer</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="https://github.com/segunajibola/Tailwinder" className="-mr-2">Github <i className="fab fa-github text-xl text-black pr-6"></i></a>
                </div>
            </div>
        </div>
      </nav>
      <header className="relative z-10 md:flex min-h-full px-2 items-center justify-between w-screen max-w-full">
        <div className="flex flex-col justify-between space-y-2 px-1">
            <h1 className="mt-20 px-2 text-6xl font-bold">Copy Tailwind Components code within seconds.</h1>
            <p className="text-2xl px-2 py-6">TailwindCSS is a utility-first CSS framework with class names to build rapid user interfaces. Know more about <a href="https://tailwindcss.com" className="text-blue-400">Tailwindcss</a></p>
            <p className="ml-2 text-xl">Get started for Free.</p>
        </div>
        <img src={header} alt="Responsive components" className="w-max h-full" />
      </header>
      {/* className="w-max h-9" style="width: 150%; */}

      <section className="w-screen mt-20 max-w">
        <p className="text-center text-xl">Page still under production.</p>
        <div className="w-40 fa-5x mt-20 m-auto">
            <i className="flex items-center w-40 fas fa-spinner fa-pulse"></i>
        </div>
      </section>

      <div className="flex justify-center mt-20 items-center">
        <a href="https://github.com/segunajibola/Tailwinder">
            <button
            className="inline-flex items-center px-4 py-2 font-semibold bg-gray-200 m-5 rounded-md shadow-xl text-blue-400"
            >
            <span>Contribute to, know more about Tailwinder on Github</span>
            </button>
        </a>
      </div>
      <p className="font-medium text-lg text-center tracing-wider mt-48 mb-2">Built with <span className="text-red-500 text-2xl">&#9829 </span> by <a href="https://www.twitter.com/iamsegunajibola" className="text-blue-800">Segun Ajibola</a>
      </p>
    </div>
  );    
}
export default App;