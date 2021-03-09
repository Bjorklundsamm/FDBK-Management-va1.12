/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-template */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn = ({
  duration = 500,
  delay = 0.25,
  children,
  ...delegated
}) => (
  <Wrapper
    {...delegated}
    style={{
      ...(delegated.style || {}),
      animationDuration: duration + 'ms',
      animationDelay: delay + 'ms',
    }}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
    z-index: 9999;
  }
`;

export default FadeIn;
