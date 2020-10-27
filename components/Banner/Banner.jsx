import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';
import * as S from "./styled";
import { strings } from "data";

const Banner = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <S.Banner>
      <S.BannerContainer>
        <S.GiftCardImg alt="giftcard" src={themeContext.assets.giftcardImg}/>
        <S.Description>
          <S.PreHeading>
            {strings.banner.header}
          </S.PreHeading>
          <div>
          <S.Heading>
            {strings.banner.heading1}
          </S.Heading><S.HeadingNext>
            {strings.banner.heading2}
          </S.HeadingNext>
          </div>

          <S.Desc>
            {strings.banner.description}
          </S.Desc>

        </S.Description>
      </S.BannerContainer>
      <S.DescMobile>
        {strings.banner.description}
      </S.DescMobile>

    </S.Banner>
  );
};


export default Banner;
