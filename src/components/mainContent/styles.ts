import styled from "styled-components"

export const Container = styled.div`
  padding: 0% 3%;
  input {
    outline: none;
    border: none;
    width: 100%;
    margin: 1rem;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 2px solid #f2f3f6;
    transition: 300ms;

    :hover {
      box-shadow: 0px 0px 5px 3px #edf3ff;
    }
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 1rem;
`
