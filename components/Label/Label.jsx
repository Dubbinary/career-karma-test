import React from "react";
import PropTypes from 'prop-types';
import * as S from "./styled";

const Label = ({ light, error, children, ...rest }) => {
  return (
    <S.Label light={light} error={error} {...rest}>
      {children}
    </S.Label>
  );
};

Label.propTypes = {
  light: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.string,
};

export default Label;
