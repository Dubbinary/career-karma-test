import styled from "styled-components";

export const Checkbox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 20px;
  margin-right: 20px;

`;

export const Label = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #132F4A;
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  color: red;
`;
