import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { Label } from "components";
import * as S from './styled';
import { strings } from "data";

const Status = ({ value, onChange}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.Status>
      <Label>{strings.reviewForm.status.label}</Label>
      <S.StatusItems>
        {strings.reviewForm.status.options.map(({ key, title, icon }, index) => (
          <S.StatusItem
            key={index}
            selected={key === value}
            onClick={() => onChange(key)}
          >
            {React.createElement(icon)}
            <span>{title}</span>
            {React.createElement(
              themeContext.assets.checkmarkSvg,
              {"fill-opacity": (key === value)?1:0}
            )}

          </S.StatusItem>
        ))}
      </S.StatusItems>
    </S.Status>
  );
};

Status.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Status;
