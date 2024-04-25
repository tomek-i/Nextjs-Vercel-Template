export type HttpOptions = {
  headers?: Record<string, string>
  queryParams?: Record<string, string>
}

const post = async <T extends BodyInit, R>(url: string, data?: T, headers?: Record<string, string>): Promise<R> => {
  const response = await fetch(url, {
    method: "POST",
    body: data,
    headers,
  })
    .then((response) => {
      return response.json()
    })
    //TODO: log error properly
    .catch((error) => console.error(error))
  return response
}

const httpDelete = async <R>(url: string, headers?: Record<string, string>): Promise<R> => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.status === 204 ? null : response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

const get = async <R>(url: string, options?: HttpOptions): Promise<{ status: string; data: R }> => {
  if (options?.queryParams) {
    const params = new URLSearchParams(options.queryParams).toString()
    url += "?" + params
  }

  const response = await fetch(url, {
    method: "GET",
    headers: options?.headers,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))

  return response
}

const put = async <T extends BodyInit, R>(url: string, data: T, headers?: Record<string, string>): Promise<R> => {
  const response = await fetch(url, {
    method: "PUT",
    body: data,
    headers,
  })
    .then((response) => {
      return response.status === 204 ? null : response.json()
    })
    //TODO: log error properly
    .catch((error) => console.error(error))
  return response
}

export const httpService = {
  post,
  get,
  put,
  delete: httpDelete,
}
