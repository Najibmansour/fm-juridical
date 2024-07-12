"use client";
import React, { useRef } from "react";
import FormInput, { FormTextarea } from "./form_components/form_input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    if (e["bot_fiedld"] == "") {
      sendFeedback(e)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          console.log("sent");
          toast.success("Message sent successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Message was not sent");
        });
    }
  };

  const ref = useRef;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid h-[90%] w-[80%] grid-cols-1 grid-rows-6 md:h-[70%] md:w-3/4 md:grid-cols-3 md:grid-rows-7 md:gap-4"
    >
      <div className="flex flex-col md:col-span-1 md:col-start-1 md:row-span-2 md:row-start-1">
        <FormInput
          className="w-full"
          title="Full Name"
          placeholder="John Doe"
          use_name="full_name"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "First Name is required",
          }}
        />
      </div>
      <div className="flex flex-col md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1">
        <FormInput
          className="w-full"
          title="Email"
          placeholder="johndoe@mail.com"
          use_name="email"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
        />
      </div>
      <div className="flex flex-col md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-1">
        <FormInput
          className="w-full"
          title="Phone"
          placeholder="+961 xx xxx xxx"
          use_name="phone"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "Phone number is required",
          }}
        />
      </div>
      <div className="row-span-2 flex flex-col md:col-span-full md:col-start-1 md:row-span-6 md:row-start-3">
        <FormTextarea
          className=""
          title="Feedback"
          placeholder="Optional Feedback message..."
          use_name="feedback"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "Message is required",
          }}
        />
      </div>
      <div className="md:row-start- pointer-events-auto row-start-6 flex flex-row justify-center md:col-span-full md:col-start-1 md:row-span-4">
        <div className="flex flex-1 flex-row pl-4">
          {Object.keys(errors).length > 0 && (
            <ul className="list-disc leading-tight text-secondary md:leading-none">
              {Object.keys(errors).map((errorKey) => (
                <li key={errorKey}>{errors[errorKey].message}</li>
              ))}
            </ul>
          )}
        </div>
        <Button
          variant="secondary"
          className="w-[30%] font-bold tracking-wider text-white md:w-[20%]"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default Form;
