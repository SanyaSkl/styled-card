import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    backgroundColor?: string
    color?: string
    borderColor?: string
    primary?: boolean
    secondary?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-family: Inter, serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 10px;
  cursor: pointer;

  ${props => props.primary && css<StyledBtnPropsType>`
    border: none;
    background-color: ${props => props.backgroundColor || "#4E71FE"};
    color: ${props => props.color || "white"};

    &:hover {
      background-color: #0000ffff;
    }
  `}

  ${props => props.secondary && css<StyledBtnPropsType>`
    background-color: transparent;
    border: 2px solid ${props => props.borderColor || "#4E71FE"};
    color: ${props => props.color || "#4E71FE"};

    &:hover {
      border-color: #0000ffff;
      color: #0000ffff;
      background-color: transparent;
    }
  `}
`



