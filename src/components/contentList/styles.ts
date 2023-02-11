import styled from "styled-components"

export const ContainerItem = styled.div`
  background-color: #fff;
  border-radius: 0.3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  transition: 100ms;
  :hover {
    background-color: #edf3ff;
  }
  p {
    margin: 0.8rem 0.5rem;
  }
`

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem 1.5rem;
  font-weight: bold;
`
