import styled from '@emotion/styled/macro';

export const Input = styled.input`
    display: block;
    background-color: #d9d9d9;
    line-height: 10px;
    font-size: 16px;
    outline: none;
    padding: 5px 20px;
    border: 1px solid transparent;
    &:focus {
        outline: none;
        border-color: #219653;
    }
`;
