import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './components/App/App.jsx';
import './utils/nanoid.js';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#219653',
            light: '#FFFFFF',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
