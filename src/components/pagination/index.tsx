import { Container } from "./styles"

type Props = {
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>
  currentPageIndex: number
}

export const Pagination = ({ currentPageIndex, setCurrentPageIndex }: Props) => {
  return (
    <Container>
      {currentPageIndex > 1 && (
        <button onClick={() => setCurrentPageIndex(value => value - 1)}>Anterior</button>
      )}
      {currentPageIndex}

      {currentPageIndex < 9 && (
        <button onClick={() => setCurrentPageIndex(value => value + 1)}>Próximo</button>
      )}
    </Container>
  )
}
