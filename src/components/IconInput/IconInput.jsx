import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import UnstyledIcon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  border-bottom: var(--borderWidth) solid #000000;
  width: var(--width);
  display: flex;
  gap: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }

  &:focus-within {
    outline: 2px solid #4374cb;
    outline-offset: 2px;
  }
`;

const Icon = styled(UnstyledIcon)`
  margin-block: auto;
  color: inherit;
`;

const Input = styled.input`
  border: none;
  outline: none;
  margin-block: 4px;
  color: inherit;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = {
    small: {
      strokeWidth: 1,
      iconSize: 10,
    },
    large: {
      strokeWidth: 2,
      iconSize: 16,
    },
  }[size];

  return (
    <Wrapper
      style={{
        "--borderWidth": style.strokeWidth + "px",
        "--width": width + "px",
      }}
    >
      <Icon
        id={icon}
        strokeWidth={style.strokeWidth}
        size={style.iconSize}
        onClick={() => {}}
      />
      <Input placeholder={placeholder} />
      <VisuallyHidden>Search input</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
