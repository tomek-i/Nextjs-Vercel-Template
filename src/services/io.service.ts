import fs from "fs"

const writeFile = async (filePath: string, file: File | string) => {
  if (typeof file === "string") {
    fs.writeFileSync(filePath, file)
  } else {
    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(filePath, buffer)
  }
}

async function readFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer()
  return Buffer.from(buffer).toString("utf8")
}

export const ioService = {
  writeFile,
  readFile,
}
