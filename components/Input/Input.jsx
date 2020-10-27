import React from "react";
import PropTypes from 'prop-types';
import { useField } from "formik";
import { Input as AntdInput } from "antd";
import * as S from "./styled";
import { Label } from "components";

const { TextArea } = AntdInput;

const Input = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   return (
     <S.Input numbered={props.type === 'number'}>
       <Label
        light={props.light}
        htmlFor={props.id || props.name}>
          {label}
        </Label>
       {props.type === "textarea" ?
             <TextArea rows={4} {...field} {...props} /> :
         <AntdInput {...field} {...props} />
         }

       {meta.touched && meta.error ? (
         <Label error={true}>{meta.error}</Label>
       ) : null}
     </S.Input>
   );
 };

 Input.propTypes = {
   label: PropTypes.string,
   type: PropTypes.string,
   light: PropTypes.bool,
   id: PropTypes.string,
   name: PropTypes.string,
 };

export default Input;
