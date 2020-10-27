import styled from "styled-components";
import { deviceClasses } from "data";

export const Header = styled.div`
  width: 100%;
  height:100px;
  background-color: white;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 135px;
  position: relative;
  z-index: 10;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.laptops,`
      padding:0 50px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsP,`
      padding:0 50px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      padding:0 25px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      padding:0 25px;
  `)}
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const BG = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  svg {
    width: 100%;
    height: 100px;
  }

`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLink = styled.a`
  color: #132F4A;
  margin-left: 80px;
  cursor: pointer;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  transition: color 0.2s linear;
  :hover{
    color: #3C91E6;
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.laptops,`
      margin-left: 40px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsP,`
      margin-left: 40px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLowM,`
      margin-left: 20px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      display: none;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      display: none;
  `)}
`;

export const MenuSandwich = styled.div`
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
