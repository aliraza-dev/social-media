"use client";

import Button from "@/app/components/common/button";
import Input from "@/app/components/common/input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";

type Variant = "LOGIN" | "REGISTER";

function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [loading, setLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    if (variant === "REGISTER") {
      axios.post("/api/register", data);
    }

    if (variant === "LOGIN") {
      // NextAuth
    }
  };

  const socialActions = (action: string) => {
    setLoading(true);

    // Next auth social sign-in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              type="text"
              errors={errors}
              label="Name"
              register={register}
              disabled={loading}
            />
          )}

          <Input
            id="email"
            type="email"
            errors={errors}
            label="Email Address"
            register={register}
            disabled={loading}
          />

          <Input
            id="password"
            type="password"
            errors={errors}
            label="password"
            register={register}
            disabled={loading}
          />

          <div className="">
            <Button fullWidth disabled={loading} type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm ">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialActions("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialActions("github")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to messenger?"
              : "Already have an account?"}
          </div>

          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
