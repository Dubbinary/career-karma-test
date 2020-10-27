import React from "react";
import * as S from "./styled";
import { strings } from "data";

const Guidelines = () => {
  return (
    <S.Guidelines>
      <S.Heading>
        {strings.guiudelines.heading}
      </S.Heading>
      {strings.guiudelines.items.map( (item, index) =>
        <S.Guideline key={index}>
          <S.Bullet size={5}/>
          {item}
        </S.Guideline>

      )}
    </S.Guidelines>
  );
};


export default Guidelines;
