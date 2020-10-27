import styled, { css } from "styled-components";

export const Label = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: ${props => props.light ?
    "#9CA6AF" :
    "#132F4A"
  };

  ${props => {
    if(props.error) return css`
      color: red;
    `;
  }}
`;
