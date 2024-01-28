/* eslint-disable react/no-unescaped-entities */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/form";
import { ArrowBigDown, ArrowRightIcon, Mail, PhoneIcon } from "lucide-react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PropTypes from "prop-types";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { Textarea } from "../components/TextArea";
import { Button } from "../components/Button";

function ContactUs() {
  return (
    <div>
      <main className="bg-white">
        <ContactSection />
      </main>
    </div>
  );
}

export default ContactUs;

function ContactSection() {
  const form = useForm({});

  function onSubmit(data) {
    console.log(data);
  }
  // Define your contact details once, so you can map through them if you need to add more sections
  const contactDetails = [
    {
      Icon: ArrowBigDown,
      title: "Knowledgebase",
      description: "We're here to help with any questions or code.",
      cta: "Contact support",
    },
    {
      Icon: ArrowBigDown,
      title: "FAQ",
      description: "Search our FAQ for answers to anything you might ask.",
      cta: "Visit FAQ",
    },
    {
      Icon: Mail,
      title: "Contact us by email",
      description: "If you wish to write us an email instead please use",
      cta: "lianah@gmail.com",
    },
    {
      Icon: PhoneIcon,
      title: "Call us",
      description: "Prefer to speak with us directly? Give us a call.",
      cta: "+256-751-772772",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl ">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-600">
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="workEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work email</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a little bit about yourself"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="green" className="w-full">
                    Contact us
                  </Button>
                </form>
              </Form>

              <div className="mt-3 text-center">
                <p className="text-sm ">
                  We’ll get back to you within 24 hours guaranteed.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="divide-y">
            {contactDetails.map(({ Icon, title, description, cta }) => (
              <div key={title} className="flex gap-x-7 py-6">
                <Icon className="h-6 w-6  text-white" />
                <div className="grow">
                  <h3 className="font-semibold text-black">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{description}</p>
                  <a
                    className="mt-2 inline-flex items-center gap-x-1 text-sm font-medium text-gray-400 hover:text-red-500 "
                    href="#"
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
