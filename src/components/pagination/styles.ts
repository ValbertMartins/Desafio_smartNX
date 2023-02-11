import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0% 3%;

  button {
    outline: none;
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    margin: 1rem;
    border-radius: 5px;
    background-color: #fafbff;
    border: none;
    border: 2px solid #f2f3f6;

    :hover {
      background-color: #edf3ff;
    }

    :disabled {
      cursor: auto;
      background-color: #fafbff;
    }
  }
`
