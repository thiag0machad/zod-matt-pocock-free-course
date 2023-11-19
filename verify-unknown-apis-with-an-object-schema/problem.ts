import { z } from 'zod'

const PersonResult = z.unknown()

export const fetchStarWarsPersonName = async (id: string) => {
  const data = await fetch('https://swapi.dev/api/people/' + id).then(res =>
    res.json()
  )

  const parsedData = PersonResult.parse(data)

  return parsedData.name
}
