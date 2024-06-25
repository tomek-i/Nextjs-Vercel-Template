import { BadRequest } from "@/util/httpResponses"

//TODO: utelize zod schema
type RegisterRequest = {
  email: string
  password: string
  confirmPassword: string

  firstname?: string
  lastname?: string
  mobile?: string
}

export async function POST(request: Request) {
  const { email, password, confirmPassword, ..._ } = (await request.json()) as RegisterRequest

  if (!email) return BadRequest("Email is required")
  if (!password) return BadRequest("Password are required")
  if (confirmPassword !== password) return BadRequest("Passwords dont match")

  throw new Error("Not implemented")
}
