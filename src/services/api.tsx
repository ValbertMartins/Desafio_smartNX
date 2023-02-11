const BASE_URL = `https://swapi.dev/api/people/?page=`

export async function requestPeople(currentPageIndex: number) {
  try {
    const response = await fetch(`${BASE_URL}${currentPageIndex}`)
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
