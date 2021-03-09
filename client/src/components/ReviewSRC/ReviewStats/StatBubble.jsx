import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { StatStyles } from '../StyledComponents/StatsStyles';
import FadeIn from '../animations/FadeIn';
import RatingsByStar from './RatingsByStar';

// Styles
const {
  StatContainers,
} = StatStyles;
// Page and Containers
const {
  SpeechBubble,
} = StatContainers;
// Content

const StatBubble = () => {
  const starClasses = ['5-stars', '4-stars', '3-stars', '2-stars', '1-stars'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentStar = starClasses[index];
      $(`.${currentStar}`).fadeIn("slow");
      index += 1;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <SpeechBubble>
        <RatingsByStar star={5} width={28} />
        <RatingsByStar star={4} width={40} />
        <RatingsByStar star={3} width={21} />
        <RatingsByStar star={2} width={8} />
        <RatingsByStar star={1} width={3} />
      </SpeechBubble>
    </div>
  );
}

export default StatBubble;
