/* eslint-disable react/prop-types */

/* eslint-disable react/no-unescaped-entities */

import { ArrowBigDown, ArrowRightIcon, HelpCircle, Mail, PhoneIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

// import emailjs from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRef, useState } from "react";
import { Icons } from "../components/Icons";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import TwoColorHeading from "../components/TwoToneTitle";
import InputField from "../components/InputField";

const contactDetails = [
  {
    Icon: ArrowBigDown,
    title: "Knowledgebase",
    description: "If you want to read more about who we are and what we do",
    cta: "About us",
    nav: "/about/company-overview",
  },
  {
    Icon: HelpCircle,
    title: "FAQ",
    description: "Search our FAQ for answers to anything you might ask.",
    cta: "Visit FAQ",
    nav: "/resources/faq",
  },
  {
    Icon: Mail,
    title: "Contact us by email",
    description: "If you wish to write us an email instead please use",
    cta: "healingsoul77@yahoo.com",
    nav: "mailto:healingsoul77@yahoo.com",
  },
  {
    Icon: PhoneIcon,
    title: "Call us",
    description: "Prefer to speak with us directly? Give us a call.",
    cta: "+1 (617) 606-1716",
    nav: "tel:+16176061716",
  },
];
const contactFormSchema = z.object({
  user_name: z
    .string()
    .nonempty({ message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not be longer than 50 characters." }),
  user_email: z
    .string()
    .nonempty({ message: "Email is required." })
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email address format.",
    }),
  user_phone: z
    .string()
    .nonempty({ message: "Phone number is required." })
    .min(10, { message: "Phone number must be at least 10 digits." })
    .max(15, { message: "Phone number must not be longer than 15 digits." }),

  user_message: z
    .string()
    .nonempty({ message: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message must not be longer than 1000 characters." }),
});

function ContactUs() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const handleForm = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_0rw7j1s",
        "template_oqahd3t",
        form.current,
        "rVCKe5q-U0074tP_N"
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success("Email sent successfully!");

          reset();
        },
        () => {
          toast.error("Error sending email. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-screen-xl mx-auto">
        <div className="">
          <TwoColorHeading firstWord="Contact" secondWord="Us" />

          <p className="mt-1 text-gray-600 dark:text-gray-heading text-xl">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 ">
          {/* Form Section */}
          <div className="flex flex-col bg-white border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-200">
            {/* Form Header */}
            <h2 className="mb-8 text-xl font-semibold">Fill in the form</h2>
            {/* Form */}
            <div className="grid gap-4 ">
              <form ref={form} onSubmit={handleSubmit(handleForm)}>
                <InputField
                  label="Name"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  name="user_name"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  name="user_email"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Phone"
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  name="user_phone"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Message"
                  id="message"
                  type="textarea"
                  placeholder="Your message"
                  name="user_message"
                  register={register}
                  errors={errors}
                />

                <div className="flex items-center justify-between">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="green"
                    className="w-full"
                  >
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Contact us
                  </Button>
                </div>
              </form>

              <div className="mt-3 text-center">
                <p className="text-sm ">
                  We’ll get back to you within 24 hours guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="divide-y">
            {contactDetails.map(({ Icon, title, description, cta,nav }) => (
              <div key={title} className="flex gap-x-7 py-6">
                <Icon className="h-8 w-8  text-green-50" />
                <div className="grow">
                  <h3 className="font-semibold text-gray-heading">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm font-medium text-gray-500 hover:text-orange-500 "
                    href={nav}
                  >
                    {cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// InputField.js

export default ContactUs;
