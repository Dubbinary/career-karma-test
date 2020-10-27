import styled from "styled-components";
import { deviceClasses } from "data";

export const DatePicker = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
  margin-right: 20px;
  max-width: 300px;
  &>div{
    margin-top: 10px;
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    max-width: 100%;
    margin-right: 0;
  `)}
`;

export const Error = styled.div`
  position: absolute;
  bottom: 0;
  color: red;
`;
