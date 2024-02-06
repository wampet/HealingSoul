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
      className="text-white transition hover:text-orange-500 "
      aria-label={name}
    >
      <Icon className="h-6 w-6" />
    </a>
  </li>
);

const Footer = () => (
  <footer className="bg-[#151D46] text-white ">
    <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-4">
      <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className=" w-full lg:w-1/4 p-8">
          <h2 className="mb-2 text-3xl font-semibold text-white">
            Connect with us!
          </h2>
          <div className="text-white">
            15 Middlesex st,
            <br />
            Framingham MA
            <br />
            01702
          </div>

          <div className="mt-4">
            <p className=" text-sm font-medium text-white">Follow us</p>
            <div className="flex  text-white">
              <ul className="mt-2 flex gap-6">
                {socials.map((social) => (
                  <SocialMediaLink key={social.name} {...social} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-2xl  w-full lg:w-1/4 p-8 space-y-2 text-white">
          <h2 className="mx-auto text-3xl font-semibold tracking-tight sm:text-3xl ">
            CALL TODAY
          </h2>

          <p>Schedule a time to take a tour.</p>
          <p>
            TEL: 617-606-1716
            <br />
            TEL: 857-334-8700
          </p>
        </div>
        <div className="  w-full lg:w-2/4 p-8">
          <div className="flex flex-row justify-between">
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href>
                  Personalized in Home Care
                </a>
                <a className="hover:opacity-75" href>
                  Skilled Nursing Services
                </a>
                <a className="hover:opacity-75" href>
                  Veteran Care
                </a>
                <a className="hover:opacity-75" href>
                  Staffing Services
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href>
                  About Us
                </a>
                <a className="hover:opacity-75" href="/blog">
                  Blog & News
                </a>
                <a className="hover:opacity-75" href="/Careers">
                  Careers
                </a>
                <a className="hover:opacity-75" href>
                  Help
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href>
                  Terms & Conditions
                </a>
                <a className="hover:opacity-75" href>
                  Privacy Policy{" "}
                </a>
              </nav>
            </div>
          </div>
          <p className="mt-8 text-sm text-white">
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
    <a href={href} className="text-white transition hover:opacity-75">
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
