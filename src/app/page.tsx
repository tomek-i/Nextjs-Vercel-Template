import { Metadata } from "next"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Next.js & Vercel Starter Template",
  description: "Next.js & Vercel Starter Template.",

  openGraph: {
    title: "Next.js & Vercel Starter Template",
    description: "Next.js & Vercel Starter Template.",
    type: "website",
    url: "https://<template>.vercel.app",
  },
}

export default function Web() {
  return (
    <>
      <section className="dark:bg-gray-900 bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Project Template
            </h1>

            <Button href="/login" className="mr-4">
              Login
            </Button>
            <Button href="/signup" className="mr-4">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
