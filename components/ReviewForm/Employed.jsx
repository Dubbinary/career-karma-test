import React from 'react';
import PropTypes from 'prop-types';
import { useField } from "formik";
import { Button } from 'antd';
import { Label } from "components";
import * as S from './styled';
import { strings } from "data";

const Employed = ({ name, onChange }) => {
  const [field, meta] = useField(name);
  const { value } = meta;


  return (
    <S.Employed>
      <Label>Are you employed in the field</Label>
      <S.EmployedBtns>
        <Button
          type={value ? 'primary' : 'default'}
          onClick={() => onChange(true)}
        >
          {strings.reviewForm.employedField.label1}
        </Button>
        <Button
          type={!value ? 'primary' : 'default'}
          onClick={() => onChange(false)}
        >
          {strings.reviewForm.employedField.label2}
        </Button>
      </S.EmployedBtns>
    </S.Employed>
  );
};

Employed.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
};


export default Employed;
