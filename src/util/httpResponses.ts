//TODO: Add more response types
//TODO: add a type restrictor because we want the response payload to always look like : { data:T, error?:boolean,success?:boolean, message?:string }
//maybe with the above todo we can make use of the discriminated union types or something like that where properties are only available depending if its an error or success
//TODO: add ability to pass in extra headers not only status however the status on the below responses should be the default status and not be overwritten

export function OK<T>(payload: T) {
  return Response.json(payload, { status: 200 })
}

export function Created<T>(payload: T) {
  return Response.json(payload, { status: 201 })
}
export function Conflict<T>(payload: T) {
  return Response.json(payload, { status: 409 })
}

export function ServerError<T>(payload: T) {
  return Response.json(payload, { status: 500 })
}

export function NoContent() {
  return new Response(null, {
    status: 204,
  })
}

export function BadRequest<T>(payload: T) {
  return Response.json(payload, { status: 400 })
}

export function Unauthorized<T>(payload: T) {
  return Response.json(payload, { status: 401 })
}

export function NotFound<T>(payload: T) {
  return Response.json(payload, { status: 404 })
}
