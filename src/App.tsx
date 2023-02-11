import { useEffect, useState } from "react"
import { Pagination } from "./components/pagination"
import MainContent from "./components/mainContent"
import { Container } from "./styles/global"
import { requestPeople } from "./services/api"

export type PeopleListProps = {
  name: string
  birth_year: string
  gender: string
}[]

function App() {
  const [peopleList, setPeopleList] = useState<PeopleListProps | []>([])
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  useEffect(() => {
    requestPeople(currentPageIndex).then(data => setPeopleList(data))
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
