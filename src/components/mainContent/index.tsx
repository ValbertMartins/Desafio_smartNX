import { useState } from "react"
import { PeopleListProps } from "../../App"
import ContentList from "../contentList"
import { Container, Title } from "./styles"

type Props = {
  peopleList: PeopleListProps
  isLoading: boolean
}

const MainContent = ({ peopleList, isLoading }: Props) => {
  const [name, setName] = useState("")

  const peopleFilteredList = peopleList.filter(people =>
    people.name.toLowerCase().includes(name.toLowerCase().trim())
  )

  return (
    <Container>
      <Title>Desafio SmartNX</Title>

      <input
        type="text"
        onChange={({ target }) => setName(target.value)}
        placeholder="filtre..."
        value={name}
      />

      {isLoading ? "Loading" : <ContentList peopleList={peopleFilteredList} />}
    </Container>
  )
}

export default MainContent
