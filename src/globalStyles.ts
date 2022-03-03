import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body{
    background: ${(props) => (props.theme === "light" ? "#f1f1f1" : "#1c1d20")};
    color: ${(props) => (props.theme === "light" ? "black" : "white")};
    font-family: -apple-system, sans-serif;
    transition: background 0.4s;
  }

`;

export const Container = styled.div`
  border: solid 2px #d1d1d1;
  border-radius: 12px;
  padding: 20px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const ToggleTheme = styled.div`
  display: flex;
  justify-content: right;
  button {
    background: white;
    border: solid 2px black;
    border-radius: 8px;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 800;
    width: 130px;
    cursor: pointer;
    display: flex;
    svg {
      margin-right: 10px;
    }
  }
`;
