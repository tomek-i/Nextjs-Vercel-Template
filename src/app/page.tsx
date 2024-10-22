import { Button } from "@/components/ui/Button"
import { Checkbox } from "@/components/ui/Checkbox"
import { Metadata } from "next"

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
  let icon = (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z"
        fill=""
      />
      <path
        d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z"
        fill=""
      />
    </svg>
  )

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Project Template
            </h1>

            <div className="flex flex-col space-y-4">
              <h2>Checkbox</h2>
              <Checkbox label="Color Test" color="test" />
              <Checkbox label="Checkbox" color="primary" />
              <Checkbox label="Checkbox checked" defaultChecked />
              <Checkbox label="Checkbox disabled" disabled />
              <Checkbox label="Checkbox checked disabled" defaultChecked disabled />
            </div>
            <div className="flex flex-col space-y-4">
              <h2>Buttons</h2>
              <Button variant="primary" rounded={"sm"} className="font-bold">
                Primary Button
              </Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outlined">Outlined Button</Button>
              <hr />
              <Button disabled>Disabled Button</Button>
              <Button disabled variant="secondary">
                Disabled Secondary Button
              </Button>
              <Button disabled variant="outlined">
                Disabled Outlined Button
              </Button>

              <hr />
              <Button variant="primary" icon={icon} iconPosition="left">
                Primary Button
              </Button>
              <Button variant="secondary" icon={icon} iconPosition="right">
                Secondary Button
              </Button>
              <Button variant="outlined" icon={icon} iconPosition="left">
                Outlined Button
              </Button>
              <hr />
              <Button disabled icon={icon} iconPosition="right">
                Disabled Button
              </Button>
              <Button disabled variant="secondary" icon={icon} iconPosition="left">
                Disabled Secondary Button
              </Button>
              <Button disabled variant="outlined" icon={icon} iconPosition="right">
                Disabled Outlined Button
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
