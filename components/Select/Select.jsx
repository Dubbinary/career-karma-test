import React from 'react';
import PropTypes from 'prop-types';
import { useField } from "formik";
import { Select as AntdSelect } from "antd";
import { Label } from "components";
import * as S from './styled';

const { Option } = AntdSelect;

const Select = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <S.Select>
      <Label
         light={props.light}
         error={meta.touched && meta.error}
         htmlFor={props.id || props.name}>
           {label}
         </Label>
         <AntdSelect {...field} {...meta} {...props}>
           {props.options.map(({ value, label }, i) => (
             <Option
              key={i}
              value={value}
              onClick={() => { props.onChange(value); }}
              >
               {label}
             </Option>
           ))}
          </AntdSelect>
        {meta.touched && meta.error ? (
          <S.Error>{meta.error}</S.Error>
        ) : null}
    </S.Select>
  );
};


Select.propTypes = {
  label: PropTypes.string,
  light: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.function,
};

export default Select;
