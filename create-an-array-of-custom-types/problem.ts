import { z } from 'zod'

const StarWarsPerson = z.object({
  name: z.string(),
})

const StarWarsPeopleResults = z.unknown()

export const fetchStarWarsPeople = async () => {
  const data = await fetch('https://swapi.dev/api/people/').then(res =>
    res.json()
  )

  const parsedData = StarWarsPeopleResults.parse(data)

  return parsedData.results
}
