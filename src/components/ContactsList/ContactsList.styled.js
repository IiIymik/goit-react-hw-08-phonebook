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
color: #ff3333;
background-color: #fff;
padding: 5px 7px;
font-weight: 400;
font-size: 15px;
line-height: 18px;
border: 1px solid rgba(255, 51, 51, 0.65);
border-radius: 5px;
:hover{
  color: #fff;
  background-color: rgba(255, 51, 51, 0.65);
  border: 1px solid rgba(255, 51, 51, 0.65);
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4));
`;
