import React from 'react';
import { Rating } from "components";
import * as S from './styled';


const ratings = [
  'Overall experience',
  'Job Support',
  'Instructions',
  'Curriculum'
];

const Ratings = () => {

  return (
    <S.Rating>
      <S.RatingHeading>Ratings</S.RatingHeading>
      <S.RatingItems>
        {ratings.map((label, index) => (
            <Rating key={index}name={`ratings[${index}]`} label={label} />
        ))}
      </S.RatingItems>
    </S.Rating>
  );
};

export default Ratings;
