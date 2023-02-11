import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * { 
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #C4AD9B;
  }
`
export const Container = styled.section`
  background-color: #c4ad9b;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
`
