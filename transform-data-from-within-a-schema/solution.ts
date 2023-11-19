import { z } from 'zod'

const StarWarsPerson = z
  .object({
    name: z.string(),
  })
  .transform(person => ({
    ...person,
    nameAsArray: person.name.split(' '),
  }))

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
})

export const fetchStarWarsPeople = async () => {
  const data = await fetch('https://swapi.dev/api/people/').then(res =>
    res.json()
  )

  const parsedData = StarWarsPeopleResults.parse(data)

  return parsedData.results
}
