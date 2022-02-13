/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import {COLORS} from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WIDTH = 370

const Container = styled.div`
  width: ${(p) => p.width}px;
  background-color: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${(p) => p.size === 'large' ? 4 : 0}px;
  border-radius: 8px;
`;

const ProgressWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  height: ${(p) => p.height}px;
  width: ${(p) => p.progress}px;
  background-color: #4747EB;
`

const ProgressBar = ({value, size}) => {
  const height = {
    'large': 16,
    'medium': 12,
    'small': 8
  }[size]

  const availableProgressWidth = size === 'large' ? (WIDTH - 8) : WIDTH
  const fillWidth = value / 100 * availableProgressWidth

  return (
    <Container
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      width={WIDTH}
      size={size}
    ><ProgressWrapper><Progress height={height} progress={fillWidth} /></ProgressWrapper></Container>
  );
};

export default ProgressBar;
