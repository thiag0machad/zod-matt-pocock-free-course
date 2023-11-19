import { z } from 'zod'

const numberParser = z.number()

export const toString = (num: unknown) => {
  const parsed = numberParser.parse(num)
  return String(parsed)
}
