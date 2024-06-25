import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "/styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <ToastContainer />
      </body>
    </html>
  )
}
