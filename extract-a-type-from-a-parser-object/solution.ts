import { z } from 'zod'

const StarWarsPerson = z.object({
  name: z.string(),
})

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
})

export type StarWarsPeopleResultsType = z.infer<typeof StarWarsPeopleResults>

export const logStarWarsPeopleResults = (data: StarWarsPeopleResultsType) => {
  data.results.map(person => {
    console.log(person.name)
  })
}
