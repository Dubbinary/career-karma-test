import styled from "styled-components";

export const Rating = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  margin-right: 65px;

`;
export const Items = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;

`;
export const Item = styled.div`
  margin-right: 8px;
  cursor: pointer;
  path{
    fill: ${({ color }) => (color ? color : "#ECECEC")};

  }
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  color: red;
`;
