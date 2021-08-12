import styled from '@emotion/styled/macro';

export const Input = styled.input`
  line-height: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 12px;
  display: flex;
  align-items: center;
`;
