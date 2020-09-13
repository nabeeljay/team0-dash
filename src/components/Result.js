import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        <h1 align="center">You prefer <strong>Conservative Risk Posture</strong>!</h1>
        <h4 align="center">The possible risk profiles are Very Defensive, Defensive, Conservative, Moderate, Moderately Aggressive, Aggressive, Very Aggressive.</h4>
      </div>
    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;