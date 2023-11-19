import { z } from 'zod'

const Form = z.object({
  repoName: z.string(),
  keywords: z.array(z.string()),
})

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values)

  return parsedData
}
