import styled from "styled-components";

type StyledHeaderPropsType = {
    fontSize: string
    color: string
}

export const StyledHeader = styled.h1<StyledHeaderPropsType>`
  font-family: Inter, serif;
  font-size: ${props => props.fontSize || "16px"};
  color: ${props => props.color || "#000000"};
`