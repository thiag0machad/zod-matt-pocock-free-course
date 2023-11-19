import { z } from 'zod'

const User = z.object({
  id: z.string().uuid(),
  name: z.string(),
})

const Post = z.object({
  id: z.string().uuid(),
  title: z.string(),
  body: z.string(),
})

const Comment = z.object({
  id: z.string().uuid(),
  text: z.string(),
})
