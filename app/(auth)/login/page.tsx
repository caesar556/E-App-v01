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
import { loginSchema } from "@/lib/validation/auth";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { useLoginMutation } from "@/store/auth/authApi";
import { useAppDispatch } from "@/hooks/hooks";
import { setUser } from "@/store/features/auhSlice";
import Oauth from "@/components/auth/Oauth";

export default function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await login(data).unwrap();

      const user = res.data.user;
      console.log(user);
      dispatch(setUser(user));
      toast.success("Login successfully");
      reset();
      router.push("/");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const inputStyle =
    "px-4 py-5 border border-violet-700/40 bg-slate-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 hover:border-violet-600 transition-all";

  return (
    <div className="w-full">
      <Card className="border-none shadow-xl bg-black/80 w-[80%] lg:w-[45%]  text-white px-8 mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Login</CardTitle>
          <CardDescription>Welcome again — login now!</CardDescription>
        </CardHeader>
        <Oauth />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
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
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
            <div className="text-center mt-4">
              You an account?{" "}
              <Link href="/register" className="text-violet-600 ">
                register
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}