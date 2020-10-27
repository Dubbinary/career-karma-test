import styled from "styled-components";
import { deviceClasses } from "data";

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0% 10%;
  margin-bottom: 200px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      padding: 0 15px;
  `)}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 30px;
  flex: 1 1 auto;
  width: inherit;

  form{
    display: flex;
    flex-direction: column;
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      margin-right: 0;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      margin-right: 0;
  `)}
`;
export const GuidelinesContainer = styled.div`
  flex: 0 1 370px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.tabletsLow,`
      display: none;
  `)}
  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
      display: none;
  `)}
`;

export const SignInBtn = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  background: #3C91E6;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 18px 25px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease-in;
  :hover{
    background: #1b78d4;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px 0;
  align-items: center;
`;

export const AppAcademyImage = styled.img`
  height: 40px;
  margin-right: 20px;
`;

export const Heading = styled.h1`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  color: #132F4A;
  margin: 0;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &>div{
    padding-bottom: 20px;
    margin-right: 20px;

    ${deviceClasses.applyStyles(
      deviceClasses.deviceDescriptors.mobiles,`
        margin-right: 0;
        width: 100%;
    `)}
  }
`;


export const Status = styled.div`
  margin: 30px 0;
  margin-top: 10px;

`;

export const StatusItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StatusItem = styled.div`
  margin-top: 10px;
  border: 1px solid #fff;
  padding: 15px;
  width: 150px;
  max-height: 44px;
  margin-right: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-color: ${({ selected }) => (selected ? "#3C91E6" : "#ECECEC")};
  border-radius: 4px;
  transition: border-color 0.3s ease;
  cursor: pointer;
  :hover {
    border-color: #3C91E6;
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    width: 140px;
    margin-right: 10px;
  `)}
`;


export const Rating = styled.div`
  margin: 30px 0;
  margin-top: 10px;
`;

export const RatingHeading = styled.div`
  margin: 10px 0;
  margin-top: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #1B2733;
`;

export const RatingItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 620px;
`;

export const Review = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 620px;
  margin-bottom: 20px;
`;

export const Tuition = styled.div`
  /* margin: 30px 0; */
  /* margin-top: 10px; */
`;

export const TuitionItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 400px;
  margin-top: 10px;
  &>div{
    margin-right: 30px;
    flex: 0 1 25%;
    width: 0;
    &>label{
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }
  }
`;

export const Employed = styled.div`
  display: flex;
  flex-direction:column;
  max-width: 620px;
  margin-bottom: 20px;
`;
export const EmployedBtns = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 10px;

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    button{
      flex-grow: 1;
    }
  `)}
`;


export const SubmitBtn = styled.button`
  min-width: 173px;
  width: fit-content;
  margin: 15px 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 18px 25px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: linear-gradient(225deg, #FFCD65 0%, #FE9F35 100%);
  transition: all 0.2s ease-in;
  :hover{
    background: linear-gradient(225deg, #FFCD65 20%, #FE9F35 100%);
  }

  ${deviceClasses.applyStyles(
    deviceClasses.deviceDescriptors.mobiles,`
    align-self: center;
  `)}
`;
