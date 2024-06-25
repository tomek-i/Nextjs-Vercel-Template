//TODO: utelize zod schema
type LoginRequest = {
  username: string
  password: string
}
export async function POST(request: Request) {
  const { username, password } = (await request.json()) as LoginRequest

  console.log({ username, password })
  throw new Error("Not implemented")
}
