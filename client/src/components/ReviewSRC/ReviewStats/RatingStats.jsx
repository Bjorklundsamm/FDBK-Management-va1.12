import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { StatStyles } from '../StyledComponents/StatsStyles';
import FadeIn from '../animations/FadeIn';
import StatBubble from './StatBubble';

// Styles
const {
  StatContainers,
  StatContent,
} = StatStyles;
// Page and Containers
const {
  SpeechBubble,
} = StatContainers;
// Content
const {
  QuestionIcon,
} = StatContent;

class RatingStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: null,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.showGraph = this.showGraph.bind(this);
  }

  onMouseEnter() {
    this.setState({
      view: 'stats',
    });
  }

  onMouseLeave() {
    this.setState({
      view: 'null',
    });
  }

  showGraph() {
    const { view } = this.state;
    if (view === 'stats') {
      return (
        <div>
          <FadeIn>
            <StatBubble />
          </FadeIn>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.showGraph()}
        </div>
        <QuestionIcon
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
        >
          ?
        </QuestionIcon>
      </div>
    );
  }
}

export default RatingStats;
