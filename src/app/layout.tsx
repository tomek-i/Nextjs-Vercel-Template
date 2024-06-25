import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ToastContainer } from "react-toastify"
import "/styles/tailwind.css"
import "react-toastify/dist/ReactToastify.css"

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
