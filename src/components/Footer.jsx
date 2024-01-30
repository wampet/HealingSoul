/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Youtube as YoutubeIcon,
} from "lucide-react";
import Input from "./Input";

const socials = [
  { name: "Instagram", url: "https://instagram.com", Icon: InstagramIcon },
  { name: "Facebook", url: "https://facebook.com", Icon: FacebookIcon },
  { name: "Twitter", url: "https://twitter.com", Icon: TwitterIcon },
  { name: "Youtube", url: "https://youtube.com", Icon: YoutubeIcon },
];

const serviceLinks = [
  { title: "Personalized in Home Care", href: "#" },
  { title: "Skilled Nursing Services", href: "#" },
  { title: "Rehabilitation Services", href: "#" },
  { title: "Veteran Care", href: "#" },
  { title: "Companion Care", href: "#" },
  { title: "Staffing Services", href: "#" },
];
const SocialMediaLink = ({ name, url, Icon }) => (
  <li>
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className="text-gray-700 transition hover:opacity-75"
      aria-label={name}
    >
      <Icon className="h-6 w-6" />
    </a>
  </li>
);

const Footer = () => (
  <footer className="">
    <div className="max-w-screen-2xl px-4 py-10 mx-auto sm:px-6 lg:px-4">
      <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className="rounded-2xl bg-[#E8F1D2] w-full lg:w-1/4 p-8">
          <h2 className="mb-6 text-3xl font-semibold">Connect with us!</h2>

          <table className="mb-4 text-sm text-left text-gray-600">
            <tbody>
              <tr className="">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Email :
                </th>
                <td className="px-2 py-2">healingsoul77@yahoo.com</td>
              </tr>
              <tr className="">
                <th
                  scope="row"
                  className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Address :
                </th>
                <td className="px-2 py-2">
                15 Middlesex st,
                  <br />
                  Framingham MA 
                  <br />
                  01702
                </td>
              </tr>
            </tbody>
          </table>

          <p className="mb-2 text-sm font-medium text-gray-600">Follow us</p>
          <div className="flex  text-gray-600">
            <ul className="mt-8 flex gap-6">
              {socials.map((social) => (
                <SocialMediaLink key={social.name} {...social} />
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-2xl bg-[#F1EBD2] w-full lg:w-1/4 p-8">
          <h2 className="mx-auto text-3xl font-semibold tracking-tight sm:text-3xl">
            Subscribe as a newsletter
          </h2>

          <form className="w-full mx-auto mt-6">
            <Input />

            <button
              type="submit"
              className="w-full mt-2 rounded-2xl bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="rounded-2xl bg-[#EDF5FA] w-full lg:w-2/4 p-8">
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                <a className="hover:opacity-75" href>
                  {" "}
                  Personal Account{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Join Account{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Wealth Account{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Team Account{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                <a className="hover:opacity-75" href>
                  {" "}
                  About Us{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Blog & News{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Careers{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Help{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-600">
                <a className="hover:opacity-75" href>
                  {" "}
                  Terms & Conditions{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Privacy Policy{" "}
                </a>
              </nav>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-800">
            Copyright © 2024 Healing Souls, All riight reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-700 transition hover:opacity-75">
      {children}
    </a>
  </li>
);

const FooterColumn = ({ title, links }) => (
  <div>
    <p className="font-medium text-gray-900">{title}</p>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <FooterLink href={link.href} key={index}>
          {link.title}
        </FooterLink>
      ))}
    </ul>
  </div>
);
