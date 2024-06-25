import { BadRequest, Conflict, Created, NoContent, NotFound, OK, ServerError, Unauthorized } from "@/util/httpResponses"

export type HttpOptions = {
  headers?: Record<string, string>
  queryParams?: Record<string, string>
}

class HttpClient {
  private async request<R>(url: string, options: RequestInit & { queryParams?: Record<string, string> }) {
    if (options.queryParams) {
      const params = new URLSearchParams(options.queryParams).toString()
      url += "?" + params
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      //TODO: add logging
      console.error(`HTTP error! status: ${response.status}`)

      //TODO: send back normalised error based on status and httpResponses.ts
      switch (response.status) {
        case 400:
          return BadRequest(response.json() as R, response.statusText)
        case 401:
          return Unauthorized(response.json() as R, response.statusText)
        case 404:
          return NotFound(response.statusText)
        case 409:
          return Conflict(response.json() as R, response.statusText)
        case 500:
          return ServerError(response.statusText)
      }

      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.status === 204
      ? NoContent()
      : response.status === 201
      ? Created<R>(response.json() as R)
      : OK<R>(response.json() as R)
  }

  async get<R>(url: string, options?: HttpOptions) {
    return this.request<R>(url, { method: "GET", ...options })
  }

  async post<T extends BodyInit, R>(url: string, data?: T, options?: HttpOptions) {
    return this.request<R>(url, { method: "POST", body: data, ...options })
  }

  async put<T extends BodyInit, R>(url: string, data: T, options?: HttpOptions) {
    return this.request<R>(url, { method: "PUT", body: data, ...options })
  }

  async delete<R>(url: string, options?: HttpOptions) {
    return this.request<R>(url, { method: "DELETE", ...options })
  }
}

export const httpService = new HttpClient()
