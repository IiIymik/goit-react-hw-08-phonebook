import css from '@emotion/styled/macro';

export const Container = css.div`
display: flex;
justify-content: center;
gap: 5px;
& a {
color: #219653;
background-color: #fff;
padding: 10px 20px;
font-weight: bold;
font-size: 15px;
line-height: 18px;
border: 1px solid #219653;
border-radius: 5px;
:hover{
  color: #fff;
  background-color: rgba(230, 106, 63, 0.95);
   border: 1px solid rgba(230, 106, 63, 0.95);
  filter: drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4));
}
}
`;
