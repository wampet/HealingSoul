/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Container from "../Container";
import Dropdown from "./Dropdown";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuitems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About Us",
      path: "#",
      children: [
        { title: "Company Overview", path: "/about" },
        { title: "Why Healing Souls", path: "whyUs" },
        { title: "FAQs", path: "/faq" },
      ],
    },
    {
      title: "Our Services",
      path: "#",
      children: [
        { title: "Skilled Nursing", path: "#" },
        { title: "Rehabilitation", path: "#" },
        { title: "Companion Care", path: "/about" },
        { title: "Social Services", path: "#" },
        { title: "Activities", path: "#" },
      ],
    },
    {
      title: "Covid-19",
      path: "/blog",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Resources",
      path: "/resources",
    },
  ];

  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center py-4 ">
        <div className="flex w-full lg:w-auto items-center justify-between">
          <a href="/" className="text-lg">
            <span className="font-bold text-slate-800">Healing</span>
            <span className="text-slate-500">Souls</span>
          </a>
          <div className="block lg:hidden">
            <button onClick={() => setOpen(!open)} className="text-gray-800 ">
              <Menu />
            </button>
          </div>
        </div>
        <nav
          className={`${
            open ? "block" : "hidden"
          } w-full lg:w-auto mt-2 lg:flex lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-3">
            {menuitems.map((item, index) => (
              <React.Fragment key={index}>
                {item.children ? (
                  <Dropdown
                    title={item.title}
                    children={item.children}
                    lastItem={index === menuitems.length - 1}
                  />
                ) : (
                  <li>
                    <a
                      href={item.path}
                      className="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      {item.title}
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div>
          <div className="hidden lg:flex items-center gap-4"></div>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
