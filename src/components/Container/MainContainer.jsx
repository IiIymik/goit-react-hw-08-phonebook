import Container from '@material-ui/core/Container';

function MainContainer({children}) {
  return (
   <Container maxWidth="xl">
      {children}
      </Container>
  )
}

export default MainContainer
