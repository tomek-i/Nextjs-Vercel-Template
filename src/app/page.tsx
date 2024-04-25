import { Metadata } from "next"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Project Starter Template",
  description: "Project Starter Template.",

  openGraph: {
    title: "Project Starter Template",
    description: "Project Starter Template.",
    type: "website",
    url: "https://<template>.vercel.app",
  },
}

export default function Web() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
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
