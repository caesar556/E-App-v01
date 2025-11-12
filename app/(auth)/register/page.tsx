"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/validation/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRegisterMutation } from "@/store/auth/authApi";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/features/auhSlice";
import { useAppDispatch } from "@/hooks/hooks";

export default function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      const res = await register(data).unwrap();
      const user = res.data.user;

      dispatch(setUser(user));
      toast.success("Account created successfully");
      reset();
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const inputStyle =
    "px-4 py-5 border border-violet-700/40 bg-slate-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 hover:border-violet-600 transition-all";

  return (
    <div>
      <Card className="border border-violet-800 bg-black/80 text-white px-8 mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Register</CardTitle>
          <CardDescription>
            Create a new account — register now!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
              <div className="flex flex-col md:flex-row gap-4">
                <Field>
                  <FieldLabel>First name</FieldLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your first name"
                        className={inputStyle}
                      />
                    )}
                  />
                  {errors.firstName && (
                    <FieldError>{errors.firstName.message}</FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel>Last name</FieldLabel>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter your last name"
                        className={inputStyle}
                      />
                    )}
                  />
                  {errors.lastName && (
                    <FieldError>{errors.lastName.message}</FieldError>
                  )}
                </Field>
              </div>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className={inputStyle}
                    />
                  )}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel>Password</FieldLabel>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                      className={inputStyle}
                    />
                  )}
                />
                {errors.password && (
                  <FieldError>{errors.password.message}</FieldError>
                )}
              </Field>
            </FieldGroup>
            <div className="w-[70%] mx-auto mt-6">
              <Button
                type="submit"
                className="w-full px-6 py-5 text-lg bg-violet-800 hover:bg-violet-700 rounded-lg transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Createing.." : "Create account"}
              </Button>
            </div>
            <div className="text-center mt-4">
              You already have account?{" "}
              <Link href="/login" className="text-violet-600 ">
                login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
