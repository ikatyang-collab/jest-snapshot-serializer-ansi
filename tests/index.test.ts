import { expect, test } from 'vitest'
import serializer from '../src/index.js'

expect.addSnapshotSerializer(serializer)

test('ansi', () => {
  const text = 'text'
  const red = `\x1B[31m${text}\x1B[39m`
  const lowerCased = `\x1b[31m${text}\x1b[39m`
  const blue = `\x1B[34m${text}\x1B[39m`

  expect(red).not.toEqual(text)
  expect(text).toMatchInlineSnapshot(`"text"`)
  expect(red).toMatchInlineSnapshot(`text`)
  expect(lowerCased).toMatchInlineSnapshot(`text`)
  expect(blue).toMatchInlineSnapshot(`text`)

  expect(new TypeError(red)).toMatchInlineSnapshot(`[TypeError: text]`)
  expect(() => {
    throw new TypeError(red)
  }).toThrowErrorMatchingInlineSnapshot(`[TypeError: text]`)
  expect(new TypeError(red)).toMatchSnapshot()
})
