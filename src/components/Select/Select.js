import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const StyledSelect = styled.select`
  background-color: ${COLORS.transparentGray15};
  border: none;
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

const Select = ({label, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
  );
};

export default Select;
