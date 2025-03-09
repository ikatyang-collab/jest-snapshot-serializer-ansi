import hasAnsi from 'has-ansi'
import stripAnsi from 'strip-ansi'

export function test(value: unknown): boolean {
  const text = value instanceof Error ? value.message : value
  return typeof text === 'string' && hasAnsi(text)
}

export function print(value: unknown) {
  if (value instanceof Error) {
    return `[${value.name}: ${stripAnsi(value.message)}]`
  }

  return stripAnsi(value as string)
}

export default { test, print }
