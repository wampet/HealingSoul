/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";

// import emailjs from "emailjs-com";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useRef, useState } from "react";
import { Icons } from "../components/Icons";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import InputField from "../components/InputField";

const contactFormSchema = z.object({
  from_name: z
    .string()
    .nonempty({ message: "Name is required." })
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must not be longer than 50 characters." }),
  user_city: z.string().nonempty({ message: "Required" }),
  user_address: z
    .string()
    .nonempty({ message: "Address is required." })
    .max(50, { message: "Address must not be longer than 50 characters." }),
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
  user_who_needs: z.string().nonempty({ message: "Required" }),
  user_care_services: z.string().nonempty({ message: "Required" }),
  user_care_hours: z.string().nonempty({ message: "Required" }),
});

function BookService() {
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
        "template_jq4l6gb",
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
    reset();
  };

  return (
    <div className="bg-white border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-200">
      <form
        ref={form}
        onSubmit={handleSubmit(handleForm)}
        className="max-w-4xl mx-auto p-6"
      >
        <h2 className="mb-8 text-xl font-semibold">Please fill in the form</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="md:col-span-2">
            <InputField
              label="Name"
              id="name"
              type="text"
              placeholder="Your name"
              name="from_name"
              register={register}
              errors={errors}
            />
          </div>

          <InputField
            label="Address"
            id="address"
            type="address"
            placeholder="Your address address"
            name="user_address"
            register={register}
            errors={errors}
          />
          <InputField
            label="City"
            id="city"
            type="city"
            placeholder="City, State, Zip Code*"
            name="user_city"
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

          <SelectField
            label="Who needs the care?"
            name="user_who_needs"
            register={register}
            options={careForOptions}
            errors={errors}
          />

          <SelectField
            label="Care Services"
            name="user_care_services"
            register={register}
            options={careOptions}
            errors={errors}
          />

          <div className="md:col-span-2">
            <SelectField
              label="Hours of care"
              name="user_care_hours"
              register={register}
              options={careHoursOptions}
              errors={errors}
            />
          </div>

          <div className="md:col-span-2">
            <InputField
              label="Message"
              id="message"
              type="textarea"
              placeholder="Your message"
              name="user_message"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            disabled={isLoading}
            size="xlg"
            variant="green"
            className="w-full"
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Book Service
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BookService;

const SelectField = ({ label, name, register, options, errors }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="border-2 p-2 w-full rounded-md border-input bg-transparent text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
        id={name}
        name={name}
        {...register(name)}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            className="bg-red-500 hover:bg-green-400"
          >
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-xs italic">{errors[name].message}</p>
      )}
    </div>
  );
};

const careOptions = [
  { label: "Which Care Services Are Required?*", value: "" },
  { label: "Personalized in Home Care", value: "Personalized in Home Care" },
  { label: "Rehabilitation Services", value: "Rehabilitation Services" },
  { label: "Veteran Care", value: "Veteran Care" },
  { label: "Staffing Services", value: "Staffing Services" },
  { label: "Companion Care", value: "Companion Care" },
  { label: "Skilled Nursing Services", value: "Skilled Nursing Services" },
  {
    label: "Physiotherapy Or Occupational Therapy Services",
    value: "Physiotherapy Or Occupational Therapy Services",
  },
  { label: "Speech Therapy", value: "Speech Therapy" },
];

const careForOptions = [
  { label: "Who Are You Seeking Care For?*", value: "" },
  { label: "Mother", value: "Mother" },
  { label: "Father", value: "Father" },
  { label: "Partner", value: "Partner" },
  { label: "Sibling", value: "Sibling" },
  { label: "Other", value: "Other" },
];

const careHoursOptions = [
  { label: "How many hours of care per week will you need?*", value: "" },
  { label: "0-4", value: "0-4" },
  { label: "5-8", value: "5-8" },
  { label: "9-13", value: "9-13" },
  { label: "14-19", value: "14-19" },
  { label: "20+", value: "20+" },
];
