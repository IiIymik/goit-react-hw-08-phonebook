import {lazy, Suspense} from 'react'
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NotFoundPage from 'views/NotFoundPage';
import HeadAppBar from 'components/AppBar/HeadAppBar';

const HomeView = lazy(() => import('../../views/HomeView' /* webpackChunkName: 'HomePage' */));
const RegisterView = lazy(() => import('../../views/RegisterView' /* webpackChunkName: 'RegisterView' */));
const LoginView = lazy(() => import('../../views/LoginView' /* webpackChunkName: 'LoginView' */));
const ContactsView = lazy(() => import('../../views/ContactsView' /* webpackChunkName: 'ContactsView' */))

const myContainer = {
  marginTop: '120px',
background: 'radial-gradient(circle, rgba(63,139,251,1) 0%, rgba(70,70,252,1) 65%)',
}
export default function App() {

  return (
    <>
      <HeadAppBar />
      <Container style={myContainer} >
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView/>
          </Route>
          <Route path="/register">
            <RegisterView/>
          </Route>
          <Route path="/login">
            <LoginView/>
          </Route>
          <Route path="/contacts">
            <ContactsView/>
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
        </Suspense>
        </Container>
    </>
  )
};
