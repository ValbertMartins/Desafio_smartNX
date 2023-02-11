import { Container } from "./styles"
import LoadingIcon from "../../assets/loading-icon.gif"
const Loading = () => {
  return (
    <Container>
      <img
        src={LoadingIcon}
        alt="Icone de loading"
      />
    </Container>
  )
}

export default Loading
