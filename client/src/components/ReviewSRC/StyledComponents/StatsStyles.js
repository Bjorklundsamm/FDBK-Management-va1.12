/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StatStyles = {
  StatContainers: {
    SpeechBubble: styled.div`
      background-color: #f8f8f8;
      border: 1px solid #c8c8c8;
      border-radius: 10px;
      width: 325px;
      height: 185px;
      text-align: center;
      padding: 20px;
      position: absolute;
      margin: -250px 0 0 -175px;
      display: flex;
      flex-direction: column;
    `,
    BottomArrow: styled.div`
      border-style: solid;
      position: absolute;

      &.bottom {
      border-color: #c8c8c8 transparent transparent transparent;
      border-width: 8px 8px 0px 8px;
      bottom: -8px;
      }
      &.bottom:after {
        border-color: #f8f8f8 transparent transparent transparent;
        border-style: solid;
        border-width: 7px 7px 0px 7px;
        bottom: 1px;
        content: "";
        position: absolute;
        left: -7px;
      }
    `,
    RatingBarContainer: styled.div`
      display: flex;
      justify-content: flex-start;
      margin-top: 8px;
    `,
  },
  StatContent: {
    QuestionIcon: styled.a`
      background-color: #999999;
      border: none;
      border-radius: 100%;
      display: inline;
      margin-left: 5px;
      padding: 0 3px 0 3px;
      font-family: 'Roboto', Sans Serif;
      font-weight: 900;
      font-size: 14px;
      text-align: left;
      outline: none;
      cursor: pointer;
      color: #000000
  `,
    StarsText: styled.h1`
      font-family: 'Roboto', Sans Serif;
      font-size: 24px;
      color: #000000;
      margin: 0;
      padding: 0;
      display: none;
    `,
    StarsBar: styled.div`
      height: 12px;
      background-color: #000000;
      margin: 10px 0 0 10px;
      display: none;
    `,
    Count: styled.div`
      align-items: center;
      color: #999999;
      font-size: 10px;
      font-weight: 700;
      text-align: left;
      margin-top: 10px;
      display: none;
  `,
  },
};
