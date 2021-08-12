import styled from '@emotion/styled/macro';

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
  padding: 10px;
  border: 1px solid green;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ButtonDel = styled.button`
  margin-left: 5px;
  background-color: white;
  color: red;
  outline: none;
  border: 1px dashed red;
  &:hover,
  :focus {
    background-color: blue;
    border: 1px dashed blue;
    color: white;
  }
`;
