import { useEffect, useState } from "react"
import { Pagination } from "./components/pagination"
import MainContent from "./components/mainContent"
import { Container } from "./styles/global"

export type PeopleListProps = {
  name: string
}[]

function App() {
  const [peopleList, setPeopleList] = useState<PeopleListProps | []>([])
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${currentPageIndex}`)
      .then(response => response.json())
      .then(data => setPeopleList(data.results))
  }, [currentPageIndex])

  return (
    <Container>
      <MainContent peopleList={peopleList} />

      <Pagination
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </Container>
  )
}

export default App
