import { z } from 'zod'

const Form = z.object({
  repoName: z.string(),
  privacyLevel: z.enum(['private', 'public']),
})

type FormType = z.infer<typeof Form>

export const validateFormInput = (values: unknown) => {
  const parsedData = Form.parse(values)

  return parsedData
}
