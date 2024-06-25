// Define a generic response payload type with discriminated unions
type ResponsePayload<T> =
  | { data: T; error?: false; success: true; message?: string }
  | { data?: T; error: true; success?: false; message: string }

/**
 * Generic function to return a JSON response with the provided payload and status.
 *
 * @template T - The type of the payload.
 * @param {ResponsePayload<T>} payload - The data to be included in the response.
 * @param {number} status - The HTTP status code of the response.
 * @param {HeadersInit} [headers] - Optional headers to be included in the response.
 * @return {Response} A JSON response with the provided payload and status.
 */
function jsonResponse<T>(payload: ResponsePayload<T>, status: number, headers?: HeadersInit): Response {
  return new Response(JSON.stringify(payload), { status, headers })
}

// Refactor existing functions to use the generic jsonResponse function
export function OK<T>(payload: T) {
  return jsonResponse({ data: payload, success: true }, 200)
}

export function Created<T>(payload: T) {
  return jsonResponse({ data: payload, success: true }, 201)
}

export function Conflict<T>(payload: T, message: string) {
  return jsonResponse({ data: payload, error: true, message }, 409)
}

export function ServerError(message: string) {
  return jsonResponse({ error: true, message }, 500)
}

export function NoContent() {
  return new Response(null, { status: 204 })
}

export function BadRequest(message: string) {
  return jsonResponse({ error: true, message }, 400)
}

export function Unauthorized<T>(payload: T, message: string) {
  return jsonResponse({ data: payload, error: true, message }, 401)
}

export function NotFound(message: string) {
  return jsonResponse({ error: true, message }, 404)
}
