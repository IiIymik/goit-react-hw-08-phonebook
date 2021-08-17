import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const textStyle = {
  fontWeight: '900',
fontSize: '50px',
  lineHeight: '61px',
color:'#fff'
}

// const containerCSS = {
//   position: 'absolute',
//   backgroundImage: 'url("../files/images/backImgHero.png")',
// }

 const HomeView = () => {
  return (
    <Container>
      <Typography variant="h3" style={textStyle}>Phone Book</Typography>
      <img src={'../files/images/backImgHero.png' }alt='phone Img' width='400px' height='400px'/>
    </Container>
  )
 }
export default HomeView;
