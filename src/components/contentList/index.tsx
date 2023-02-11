import { PeopleListProps } from "../../App"
import { ContainerItem, Summary } from "./styles"

type Props = {
  peopleList: PeopleListProps
}

const ContentList = ({ peopleList }: Props) => {
  return (
    <div>
      <Summary>
        <p>Nome</p>
        <p>Gênero</p>
        <p>Altura</p>
        <p>Cor do cabelo</p>
      </Summary>

      {peopleList.map((people, index) => {
        return (
          <ContainerItem key={people.name}>
            <p>{people.name}</p>
            <p>{people.gender}</p>
            <p>{people.height}</p>
            <p>{people.hair_color}</p>
          </ContainerItem>
        )
      })}
    </div>
  )
}

export default ContentList
