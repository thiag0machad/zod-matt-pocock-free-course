import { z } from 'zod'

const ObjectWithId = z.object({
  id: z.string().uuid(),
})

const User = ObjectWithId.extend({
  name: z.string(),
})

const Post = ObjectWithId.extend({
  title: z.string(),
  body: z.string(),
})

const Comment = ObjectWithId.extend({
  text: z.string(),
})
