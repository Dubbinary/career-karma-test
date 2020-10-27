import styled from "styled-components";

export const Guidelines = styled.div`
  width: 100%;
  background: #F8FAFC;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px 10px;
`;

export const Heading = styled.h2`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #1B2733;
  margin-left: 10px;
`;

export const Guideline = styled.div`
  margin-top: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  color: #72808E;
`;

export const Bullet = styled.span`
  height: 5px;
  width: 5px;
  min-height: 5px;
  min-width: 5px;
  background: ${props =>
    props.color ?
    props.color :
    "#3C91E6"
  };
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 2px;
  margin-right: 5px;
`;
