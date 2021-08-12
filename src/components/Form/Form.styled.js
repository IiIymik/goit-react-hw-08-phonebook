import styled from '@emotion/styled/macro';

export const FormEl = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 5px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export const TitleInput = styled.h2``;

export const Button = styled.button`
  margin-left: 5px;
  background-color: white;
  color: green;
  outline: none;
  border: 1px dashed green;
  padding: 3px;
  &:hover,
  :focus {
    background-color: blue;
    border: 1px dashed blue;
    color: white;
  }
`;
