import { z } from 'zod'

const StarWarsPerson = z.object({
  name: z.string(),
})

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
})

export const logStarWarsPeopleResults = (data: unknown) => {
  data.results.map(person => {
    console.log(person.name)
  })
}
