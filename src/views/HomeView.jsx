import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BtnAuthNav from 'components/AuthNav/AuthNav';


const titleStyle = {
  fontWeight: '900',
  fontSize: '50px',
  lineHeight: '61px',
  color: '#fff',
  marginBottom: '20px'
}

 const HomeView = () => {
  return (
    <Container >
      <Typography variant='h3' style={titleStyle} align='center'>Phone Book</Typography>
      <Typography variant='h6' align='center' color='secondary' style={{marginBottom:'10px'}}>
        Here you can keep all your phone numbers
      </Typography>
      <BtnAuthNav />
    </Container>
  )
 }
export default HomeView;
