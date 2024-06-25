// "use client"
import { firebase } from "@/lib/firebase"
import { onAuthStateChanged } from "firebase/auth"
import React, { createContext, FC, useContext, useEffect, useState } from "react"

type AuthContextType = {
  // user: User | null
  user: dbUser | null
  isLoading: boolean
} & Record<string, any>

const AuthContext = createContext({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

type dbUser = { id: string; name: string; email: string; photoURL: string | null }
const AuthContextProvider: FC<React.PropsWithChildren> = ({ children }) => {
  // const [user, setUser] = useState<User | null>(null)
  const [user, setUser] = useState<dbUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase.auth, async (user) => {
      if (user) {
        //TODO: this attaches the firebase user but we also have an application user which has different data eg. a user profile
        // ath the moment we write the same uid into that user but i am not sure if that is the best way or if we should generate new uids with prisma
        // and store the firebase uid in the user and or profile including the provider in case we want to support next-auth and other oauth providers
        //TODO: perhaps i dont need to call this and i can just return a user object with the id,name and email
        // const response = await httpService.get<dbUser>(`/api/users/${user.uid}`)
        setUser({ id: user.uid, name: user.displayName ?? "", email: user.email ?? "", photoURL: user.photoURL })
      } else {
        setUser(null)
        //TODO: should we redirect the user to login page here?
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }

export type { AuthContextType }
