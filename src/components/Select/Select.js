import React, {useRef} from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};

  &:focus {
    border: 2px solid #4374CB;
  }

  &:hover {
    color: ${COLORS.black};
  }
`


const StyledSelect = styled.select`
  background-color: hsla(0 0% 0% / 0%);
  border: none;

  &:focus {
    border: 0px solid;
  }

  &:hover {
    // color: ${COLORS.black};
  }
`

const Select = ({label, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);
  const selectRef = useRef()
  const onWrapperClick = () => {
    selectRef.current.focus()
  }

  return (
    <Wrapper onClick={onWrapperClick}>
      <StyledSelect ref={selectRef} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
