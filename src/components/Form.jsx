/* eslint-disable react/prop-types */
import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, useFormContext, FormProvider } from "react-hook-form";


const Form = FormProvider;

const FormFieldContext = React.createContext({ name: "" });

const FormField = (props) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext({ id: "" });

const FormItem = ({ className, ...props }) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-1 ${className}`} {...props} />
    </FormItemContext.Provider>
  );
};

FormItem.displayName = "FormItem";

const FormLabel = ({ className, ...props }) => {
  const { error, formItemId } = useFormField();

  return (
    <LabelPrimitive.Root
      className={`text-sm  ${error ? "text-destructive" : ""} ${className} pb-0`}
      htmlFor={formItemId}
      {...props}
    />
  );
};

FormLabel.displayName = "FormLabel";

const FormControl = ({ ...props }) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
};

FormControl.displayName = "FormControl";

const FormDescription = ({ className, ...props }) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      id={formDescriptionId}
      className={`text-[0.8rem] text-muted-foreground ${className}`}
      {...props}
    />
  );
};

FormDescription.displayName = "FormDescription";

const FormMessage = ({ className, children, ...props }) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      id={formMessageId}
      className={`text-[0.8rem] font-medium text-destructive ${className}`}
      {...props}
    >
      {body}
    </p>
  );
};

FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
