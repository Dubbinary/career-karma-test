import React from "react";
import PropTypes from 'prop-types';
import { useField } from "formik";
import { Checkbox as AntdCheckbox } from "antd";
import * as S from "./styled";


const Checkbox = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <S.Checkbox>
        <AntdCheckbox checked={meta.value} {...field} {...meta} {...props} >
          <S.Label
           light={props.light}
           error={meta.touched && meta.error}
           htmlFor={props.id || props.name}>
             {label}
           </S.Label>
        </AntdCheckbox>
       {meta.touched && meta.error ? (
         <S.Error>{meta.error}</S.Error>
       ) : null}
     </S.Checkbox>
   );
 };


 Checkbox.propTypes = {
   label: PropTypes.string,
   ratingNum: PropTypes.number,
   light: PropTypes.bool,
   id: PropTypes.string,
   name: PropTypes.string,
 };

export default Checkbox;
