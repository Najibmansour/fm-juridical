"use client";
import React, { useRef } from "react";
import FormInput, { FormTextarea } from "./form_components/form_input";
import { useForm } from "react-hook-form";

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
      className="grid h-[70%] w-3/4 bg-green-500/10 md:grid-cols-3 md:grid-rows-7 md:gap-4"
    >
      <div className="flex flex-col md:col-span-1 md:col-start-1 md:row-span-2 md:row-start-1">
        <FormInput
          className="w-full"
          title="First Name"
          placeholder="John"
          use_name="first_name"
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
          title="First Name"
          placeholder="John"
          use_name="first_name"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "First Name is required",
          }}
        />
      </div>
      <div className="flex flex-col md:col-span-1 md:col-start-3 md:row-span-2 md:row-start-1">
        <FormInput
          className="w-full"
          title="First Name"
          placeholder="John"
          use_name="first_name"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            required: "First Name is required",
          }}
        />
      </div>
      <div className="flex flex-col md:col-span-full md:col-start-1 md:row-span-1 md:row-start-2">
        <FormTextarea
          className=""
          title="Feedback"
          placeholder="Optional Feedback message..."
          use_name="feedback"
          errorsOBJ={errors}
          registerOBJ={register}
          restrictions={{
            maxlength: {
              value: 15,
              message: "error message",
            },
          }}
        />
      </div>
    </form>
  );
};

export default Form;
