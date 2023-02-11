import { Container } from "./styles"

type Props = {
  setCurrentPageIndex: React.Dispatch<React.SetStateAction<number>>
  currentPageIndex: number
}

export const Pagination = ({ currentPageIndex, setCurrentPageIndex }: Props) => {
  return (
    <Container>
      <button
        onClick={() => setCurrentPageIndex(value => value - 1)}
        disabled={currentPageIndex === 1}
      >
        Anterior
      </button>

      <p>{currentPageIndex}</p>

      <button
        onClick={() => setCurrentPageIndex(value => value + 1)}
        disabled={currentPageIndex === 9}
      >
        Próximo
      </button>
    </Container>
  )
}
