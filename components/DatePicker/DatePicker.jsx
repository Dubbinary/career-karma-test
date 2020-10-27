import React from "react";
import PropTypes from 'prop-types';
import { useField } from "formik";
import { DatePicker as AntdDatePicker } from "antd";
import * as S from "./styled";
import { Label } from "components";

const DatePicker = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <S.DatePicker >
       <Label
        light={props.light}
        htmlFor={props.id || props.name}>
          {label}
        </Label>
       <AntdDatePicker onChange={props.onChange} {...field} {...props} />
       {meta.touched && meta.error ? (
         <S.Error>{meta.error}</S.Error>
       ) : null}
     </S.DatePicker>
   );
 };


 DatePicker.propTypes = {
   label: PropTypes.string,
   light: PropTypes.bool,
   id: PropTypes.string,
   name: PropTypes.string,
   onChange: PropTypes.function,
 };

export default DatePicker;
