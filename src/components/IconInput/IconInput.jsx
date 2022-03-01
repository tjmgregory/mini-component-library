import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import UnstyledIcon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

// Alternative to this approach is to make the input the whole size, and
// then absolute the image over the top and put some padding on the left
// hand side to ensure it's not hidden by the icon.

const Wrapper = styled.div`
  display: flex;
  gap: 8px;

  border-bottom: var(--borderWidth) solid #000000;
  width: var(--width);
  font-size: var(--fontSize);

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
  line-height: 1.5;
  color: inherit;
  font-size: inherit;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = {
    small: {
      strokeWidth: 1,
      iconSize: 16,
      fontSize: 14,
    },
    large: {
      strokeWidth: 2,
      iconSize: 24,
      fontSize: 18,
    },
  }[size];

  return (
    <Wrapper
      style={{
        "--borderWidth": style.strokeWidth + "px",
        "--width": width + "px",
        "--fontSize": style.fontSize + "px",
      }}
    >
      <Icon
        id={icon}
        strokeWidth={style.strokeWidth}
        size={style.iconSize}
        onClick={() => {}}
      />
      <Input placeholder={placeholder} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

export default IconInput;
