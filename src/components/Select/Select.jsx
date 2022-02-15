import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: fit-content;
`;

const NativeSelect = styled.select`
  opacity: 0%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PresentationLayer = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  width: fit-content;

  /* Needed so that the underlying select can be clicked */
  pointer-events: none;

  ${NativeSelect}:focus + & {
    outline: 2px solid #4374cb;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
`;

const TextWrapper = styled.div`
  padding-right: 28px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect aria-label={label} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationLayer>
        <TextWrapper>{displayedValue}</TextWrapper>
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" size={24} strokeWidth={2} />
        </IconWrapper>
      </PresentationLayer>
    </Wrapper>
  );
};

export default Select;
