import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Input = styled.input`
  display: inline;
  border: none;
`;

const Wrapper = styled.div`
  border-bottom: var(--borderWidth) solid #000000;
  width: var(--width);

  & > ${Input}:focus {
    outline: 2px solid #4374cb;
  }
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
      <Icon id={icon} strokeWidth={style.strokeWidth} size={style.iconSize} />
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
