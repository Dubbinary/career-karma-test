import React from "react";
import PropTypes from 'prop-types';
import { Header, Banner } from "components";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <S.Body>
        <S.Content>
          <Banner />
          {children}
        </S.Content>
      </S.Body>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
