type LoginRequest = {
  username: string
  password: string
}
export async function POST(request: Request) {
  const { username, password } = (await request.json()) as LoginRequest

  throw new Error("Not implemented")
}
