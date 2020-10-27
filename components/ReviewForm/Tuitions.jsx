import React from 'react';
import { Checkbox, Label } from "components";
import * as S from './styled';
import { strings } from "data";

const Tuitions = () => {

  return (
    <S.Tuition>
      <Label>{strings.reviewForm.tuitions.label}</Label>
      <S.TuitionItems>
        {strings.reviewForm.tuitions.options.map((label, index) => (
            <Checkbox key={index} name={`tuitions[${index}]`} label={label} />
        ))}
      </S.TuitionItems>
    </S.Tuition>
  );
};

export default Tuitions;
