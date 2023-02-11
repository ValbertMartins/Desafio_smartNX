import { useState } from "react"
import { PeopleListProps } from "../../App"
import ContentList from "../contentList"
import { Container, Header, Title } from "./styles"

type Props = {
  peopleList: PeopleListProps
}

const MainContent = ({ peopleList }: Props) => {
  const [name, setName] = useState("")

  const peopleFilteredList = peopleList.filter(people =>
    people.name.toLowerCase().includes(name.toLowerCase().trim())
  )

  return (
    <Container>
      <Header>
        <Title>Desafio SmartNX</Title>

        <input
          type="text"
          onChange={({ target }) => setName(target.value)}
          placeholder="filtre..."
          value={name}
        />
      </Header>

      <ContentList peopleList={peopleFilteredList} />
    </Container>
  )
}

export default MainContent
