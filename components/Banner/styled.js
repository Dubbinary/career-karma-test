import styled, { css } from "styled-components";
import { deviceClasses } from "data";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  padding-top: 20px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsP,`
      padding: 40px 100px;
      padding-top: 20px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      padding: 40px 50px;
      padding-top: 20px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      padding: 40px 25px;
      padding-top: 20px;
  `)}
`;

export const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


export const GiftCardImg = styled.img`
  height: 100%;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      height: 100px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      height: 82px;
  `)}
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 662px;
  margin-left: 40px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      margin-left: 15px;
  `)}
`;

export const PreHeading = styled.h2`
  color: #72808E;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      marging: 0;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    font-size: 16px;
    line-height: 20px;
    marging: 0;
  `)}
`;

export const HeadingCss = css`
  color: #1B2733;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
`;


export const Heading = styled.span`
  ${HeadingCss}

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      display: block;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      display: block;
      font-size: 28px;
      line-height: 32px;
  `)}
`;

export const HeadingNext = styled.span`
  ${HeadingCss}

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      color: grey;
      font-size: 22px;
      line-height: 32px;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      color: grey;
      font-size: 16px;
      line-height: 20px;
  `)}
`;

export const DescCss = css`
  color: #72808E;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;

export const Desc = styled.span`
  ${DescCss}

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      display: none;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      display: none;
  `)}
`;

export const DescMobile = styled.span`
  ${DescCss}
  padding: 15px 0,;
  padding-top: 15px;

  @media (min-width: 769px) {
    display: none;
  }
`;
