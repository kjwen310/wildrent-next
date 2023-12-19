"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Icons } from '@/components/icons/Icon'
import { toast } from 'react-hot-toast';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({message: "電子信箱格式不正確" }).min(1, { message: "帳號必填" }),
  password: z.string().min(1, { message: "密碼必填" }),
})

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        setIsLoading(false);

        if (callback?.ok) {
          toast.success('Logged in');
          router.push('/');
        }

        if (callback?.error) {
          toast.error(callback.error);
        }

      })
  }

  const goRegister = () => {
    router.push('/register')
  };

  return (
    <div className='space-y-4 mx-auto max-w-lg'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電子信箱</FormLabel>
                <FormControl>
                  <Input placeholder="請輸入電子信箱" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密碼</FormLabel>
                <FormControl>
                  <Input placeholder="請輸入密碼" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">登入</Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            或以第三方登入
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <Button variant="outline" type="button" disabled={isLoading} onClick={() => signIn('google')}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Continue with Google
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} onClick={() => signIn('github')}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Continue with Github
        </Button>
        <div
          className="
            text-neutral-500
            text-center
            text-sm
            font-light
          "
        >
          <div className="flex flex-row justify-center items-center gap-2">
            <div>第一次造訪 Wild Rent？</div>
            <div
              onClick={goRegister}
              className="text-neutral-500 cursor-pointer underline"
            >
              註冊您的帳號
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
