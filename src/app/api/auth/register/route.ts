import { BadRequest } from "@/util/httpResponses"

type RegisterRequest = {
  email: string
  password: string
  confirmPassword: string
  firstname: string
  lastname: string
  mobile: string
}

export async function POST(request: Request) {
  const { email, password, confirmPassword, ...rest } = (await request.json()) as RegisterRequest

  if (!email) return BadRequest({ error: "Email is required" })
  if (!password) return BadRequest({ error: "Password are required" })
  if (confirmPassword !== password) return BadRequest({ error: "Passwords dont match" })

  throw new Error("Not implemented")
}
