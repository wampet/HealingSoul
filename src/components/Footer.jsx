/* eslint-disable react/prop-types */

import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Youtube as YoutubeIcon,
} from "lucide-react";

const socials = [
  { name: "Instagram", url: "https://instagram.com", Icon: InstagramIcon },
  { name: "Facebook", url: "https://facebook.com", Icon: FacebookIcon },
  { name: "Twitter", url: "https://twitter.com", Icon: TwitterIcon },
  { name: "Youtube", url: "https://youtube.com", Icon: YoutubeIcon },
];

const serviceLinks = [
  { title: "Skilled Nursing", path: "/services/skilled-nursing" },
  { title: "Rehabilitation", path: "/services/rehabilitation" },
  { title: "Companion Care", path: "/services/companion-care" },
  { title: "Specialized Care", path: "/services/specialized-care" },
  { title: "Social Services", path: "/services/social-services" },
];
const companyLinks = [
  { title: "Company Overview", path: "/about/company-overview" },
  { title: "Why Healing Soul", path: "/about/why-healing-soul" },
  { title: "Careers", path: "/careers" },
  { title: "Contact Us", path: "/contact" },
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
  <footer className="bg-[#1D4624] text-white ">
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
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white ">
                {serviceLinks.map((item, index) => (
                  <a
                    className=" hover:text-orange-600"
                    href={item.path}
                    key={index}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                {companyLinks.map((item, index) => (
                  <a
                    className=" hover:text-orange-600"
                    href={item.path}
                    key={index}
                  >
                    {item.title}
                  </a>
                ))}

                {/* <a className="hover:opacity-75" href>
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
                </a> */}
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
            Copyright © 2024 Healing Soul, All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
