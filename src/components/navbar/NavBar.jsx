/* eslint-disable react/no-children-prop */
import React, { useState } from "react";
import Container from "../Container";
import home from "../../assets/home.png";
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
        { title: "Company Overview", path: "/about/company-overview" },
        { title: "Why Healing Soul", path: "/about/why-healing-soul" },
        // { title: "FAQs", path: "about/faq" },
      ],
    },
    {
      title: "Our Services",
      path: "#",
      children: [
        { title: "Skilled Nursing", path: "/services/skilled-nursing" },
        { title: "Rehabilitation", path: "/services/rehabilitation" },
        { title: "Companion Care", path: "/services/companion-care" },
        { title: "Specialized Care", path: "/services/specialized-care" },
        { title: "Social Services", path: "/services/social-services" },
      ],
    },
    {
      title: "Careers",
      path: "/careers",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
    {
      title: "Resources",
      path: "#",
      children: [
        { title: "Blog", path: "/resources/blog" },
        { title: "FAQs", path: "/resources/faq" },
      ],
    },
  ];

  return (
    <Container>
      <header className="flex flex-col lg:flex-row justify-between items-center ">
        <div className="flex w-full lg:w-auto items-center justify-between py-4 px-4">
          <a href="/" className="text-lg">
            <div className="">
              <img
                src={home}
                alt="home"

                className="h-12 w-auto"
              />
            </div>
          </a>
          <div className="block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-800  hover:text-orange-500"
            >
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
              <React.Fragment
                key={index}
                className="hover:text-orange-500 font-serif font-semibold"
              >
                {item.children ? (
                  <Dropdown
                    className="hover:text-orange-500"
                    title={item.title}
                    children={item.children}
                    lastItem={index === menuitems.length - 1}
                  />
                ) : (
                  <li>
                    <a
                      href={item.path}
                      className="flex lg:px-3 py-2 text-gray-heading font-serif font-semibold hover:text-orange-500"
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
