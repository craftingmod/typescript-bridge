import readline from "node:readline"

export function log(str: unknown) {
  console.log(str)
}

export async function readLine() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  for await (const line of rl) {
    return line
  }
}