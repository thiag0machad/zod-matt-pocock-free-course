import { z } from 'zod'

const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.string(),
})

type PrivacyLevel = 'private' | 'public'

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values)

  return parsedData
}
