/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { StatStyles } from '../StyledComponents/StatsStyles';
import FadeIn from '../animations/FadeIn';

const {
  StatContainers,
  StatContent,
} = StatStyles;
// Page and Containers
const {
  RatingBarContainer,
} = StatContainers;
// Content
const {
  StarsText,
  StarsBar,
  Count,
} = StatContent;

const RatingsByStar = (props) => {
  const { star, width } = props;
  const stars = `${star} stars`;
  const bar = width * 4;
  const total = `${width} reviews`;

  return (
    <FadeIn>
      <RatingBarContainer>
        <StarsText className={`${props.star}-stars`}>
          {stars}
        </StarsText>
        <StarsBar style={{ width: bar }} className={`${props.star}-stars`} />
        <Count className={`${props.star}-stars`}>({total})</Count>
      </RatingBarContainer>
    </FadeIn>
  );
}

export default RatingsByStar;
