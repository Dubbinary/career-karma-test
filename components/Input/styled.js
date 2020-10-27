import styled from "styled-components";
import { deviceClasses } from "data";

export const Input = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  margin-right: 20px;
  input {
    margin-top: 10px;
    ${({ numbered }) => (numbered ? `max-width: 150px;` : `min-width: 300px;`)}
  }
  textarea{
    margin-top: 10px;
    min-width: 300px;
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    margin-right: 0;
    input, textarea{

      width: 100%;
    }
  `)}
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  color: red;
`;
