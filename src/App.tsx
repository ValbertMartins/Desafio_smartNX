import { useEffect, useState } from "react"
import { Pagination } from "./components/pagination"
import MainContent from "./components/mainContent"
import { Container } from "./styles/global"
import { requestPeople } from "./services/api"

export type PeopleListProps = {
  name: string
  birth_year: string
  gender: string
  height: string
  hair_color: string
}[]

function App() {
  const [peopleList, setPeopleList] = useState<PeopleListProps | []>([])
  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  console.log(isLoading)

  useEffect(() => {
    setIsLoading(true)
    requestPeople(currentPageIndex).then(data => {
      setPeopleList(data)
      setIsLoading(false)
    })
  }, [currentPageIndex])

  return (
    <Container>
      <MainContent
        peopleList={peopleList}
        isLoading={isLoading}
      />

      <Pagination
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </Container>
  )
}

export default App
