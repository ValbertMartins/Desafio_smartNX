import React from "react"
import { PeopleListProps } from "../../App"
import { Container, ContainerItem, Name } from "./styles"

type Props = {
  peopleList: PeopleListProps
}

const ContentList = ({ peopleList }: Props) => {
  return (
    <Container>
      {peopleList.map(people => {
        return (
          <ContainerItem key={people.name}>
            <Name>{people.name}</Name>
          </ContainerItem>
        )
      })}
    </Container>
  )
}

export default ContentList
