import React, { useState } from 'react';
import { Link } from 'gatsby';

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

        {isActive && (
          <div className="justify-end flex-col tablet:hidden absolute min-w-full top-[0px] bg-blue-700 min-h-screen ">
            <div className="flex justify-end min-h-[64px] items-center">
              <img
                onClick={handleClick}
                className="tablet:hidden mr-4"
                src={require('../images/Close.svg').default}
                alt="Close menu icon"
              />
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
        <img
          onClick={handleClick}
          className="tablet:hidden mr-4"
          src={require('../images/Menu.svg').default}
          alt="Menu icon"
        />
      </nav>
    </header>
  );
};

export default HeaderComponent;
