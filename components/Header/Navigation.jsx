import React from "react";
import Link from 'next/link';
import * as S from "./styled";
import { strings } from "data";

const Navigation = () => {
  return (
    <S.Navigation>
      {strings.header.navigation.map(([text, link]) =>
        <Link key={text} href={link}>
          <S.NavLink>{text}</S.NavLink>
        </Link>
      )}
    </S.Navigation>
  );
};

export default Navigation;
