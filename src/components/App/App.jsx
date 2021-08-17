import { lazy, Suspense, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import NotFoundPage from 'views/NotFoundPage';
import HeadAppBar from 'components/AppBar/HeadAppBar';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { ToastContainer } from 'react-toastify';

const HomeView = lazy(() => import('../../views/HomeView' /* webpackChunkName: 'HomePage' */));
const RegisterView = lazy(() => import('../../views/RegisterView' /* webpackChunkName: 'RegisterView' */));
const LoginView = lazy(() => import('../../views/LoginView' /* webpackChunkName: 'LoginView' */));
const ContactsView = lazy(() => import('../../views/ContactsView' /* webpackChunkName: 'ContactsView' */))

const myContainer = {
  display: 'flex',
  marginTop: '120px',
  alignItems: 'center',
  justifyContent: 'center',
}


export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return ( !isFetchingCurrent && (
      <Container style={myContainer} >
      <HeadAppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView/>
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo='/contacts' >
            <RegisterView/>
            </PublicRoute>



            <PublicRoute path="/login" restricted redirectTo='/contacts' >
            <LoginView/>
          </PublicRoute>




          <PrivateRoute path="/contacts">
            <ContactsView/>
          </PrivateRoute>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
        <ToastContainer autoClose={3000} />
        </Container>
  ))
};
