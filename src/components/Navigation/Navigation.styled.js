import css from '@emotion/styled/macro';

export const Nav = css.nav`
& > a {
    display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #fff;
  font-size: 18px;
  &:hover{
    color: #000;
  }
}
`;
