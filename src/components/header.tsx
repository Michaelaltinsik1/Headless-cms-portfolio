import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { graphql, PageProps } from 'gatsby';

// import '../images/Menu.png';
// import close from '../images/Close.svg';
import close from './close.svg';

const HeaderComponent = () => {
  const [isActive, ToogleActive] = useState(false);
  const handleClick = () => {
    ToogleActive(!isActive);
  };

  return (
    <header>
      <nav className="bg-blue-900 min-h-[64px] tablet:min-h-[120px] justify-end flex items-center">
        <ul className="justify-end hidden tablet:flex px-12">
          <li className="mx-4">
            <Link
              className="text-2xl font-medium hover:underline underline-offset-4"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="text-2xl font-medium hover:underline underline-offset-4"
              to="/portfolio"
            >
              Projects
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="text-2xl font-medium hover:underline underline-offset-4"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link
              className="text-2xl font-medium hover:underline underline-offset-4"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {!isActive && (
          <div className="justify-end flex-col tablet:hidden absolute min-w-full top-[0px] bg-blue-700 min-h-screen ">
            <div className="flex justify-end min-h-[64px] items-center">
              <h1 className="mx-4" onClick={handleClick}>
                close
              </h1>
            </div>
            <ul className="flex-col">
              <li className="flex justify-center">
                <Link className="text-3xl py-3" to="/">
                  Home
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="text-3xl py-3" to="/portfolio">
                  Projects
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="text-3xl py-3" to="/about">
                  About
                </Link>
              </li>
              <li className="flex justify-center">
                <Link className="text-3xl py-3" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <img src={'/Close.svg'} alt="fefe" />
        {/* <svg
          onClick={handleClick}
          className="tablet:hidden mr-4"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_308_17760)">
            <path
              d="M4 24H28V21.3333H4V24ZM4 17.3333H28V14.6667H4V17.3333ZM4 8V10.6667H28V8H4Z"
              fill="#FAFAFA"
            />
          </g>
          <defs>
            <clipPath id="clip0_308_17760">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg> */}
      </nav>
    </header>
  );
};

export default HeaderComponent;
