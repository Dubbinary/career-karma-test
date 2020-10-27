import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Link from 'next/link';
import * as S from "./styled";
import Navigation from "./Navigation";


const Header = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <Link href={`/`}>
            <a>
            <img alt="logo" src={themeContext.assets.logoImg}/>
            </a>
          </Link>
        </S.Logo>
        <Navigation />
        <S.MenuSandwich>
          {React.createElement(themeContext.assets.headerMenuSvg)}
        </S.MenuSandwich>
      </S.Content>

      <S.BG>
      {React.createElement(
        themeContext.assets.headerBGSvg,
        {
          preserveAspectRatio: "none",
          viewBox: "0 0 1440 88"
        }
      )}
      </S.BG>

    </S.Header>
  );
};


export default Header;
