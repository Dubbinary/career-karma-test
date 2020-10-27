import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useField } from "formik";
import { ThemeContext } from 'styled-components';
import { Label } from "components";
import * as S from './styled';


const Rating = ({ label, ratingNum, ...props}) => {
  const themeContext = useContext(ThemeContext);
  const [field, meta, helpers] = useField(props);
  const { value } = meta;
  const { setValue } = helpers;

  const ratingItems = Array(ratingNum).fill(0);

  return (
    <S.Rating>
      <Label
         light={props.light}
         error={meta.touched && meta.error}
         htmlFor={props.id || props.name}>
           {label}
         </Label>
         <S.Items>
         {ratingItems.map((item, i) =>
           <S.Item
           key={item+i}
            color={(i <= value) ? '#FE9F35' : '#ECECEC'}
            onClick={() => setValue(i)}
          >
             {React.createElement(
               themeContext.assets.starSvg,
               {fill: (i <= value) ? '#FE9F35' : '#ECECEC'}
             )}
            </S.Item>
         )}
         </S.Items>
        {meta.touched && meta.error ? (
          <S.Error>{meta.error}</S.Error>
        ) : null}
    </S.Rating>
  );
};

Rating.propTypes = {
  label: PropTypes.string,
  ratingNum: PropTypes.number,
  light: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

Rating.defaultProps = {
  ratingNum: 5,
};

export default Rating;
