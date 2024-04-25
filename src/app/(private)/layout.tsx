"use client"
import { useRouter } from "next/navigation"
import { DefaultLayout } from "@/components/Layout/DefaultLayout"
import { Loading } from "@/components/Loading"
import { AuthContextProvider, useAuthContext } from "@/contexts/authContext"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthContextProvider>
        <LayoutContent>{children}</LayoutContent>
      </AuthContextProvider>
    </>
  )
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading, user } = useAuthContext()
  const router = useRouter()
  if (isLoading) {
    return <Loading />
  }

  // TODO: uncomment this block of code
  if (!user && !isLoading) {
    router.push("/")
    return null
  }

  return (
    <>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  )
}
