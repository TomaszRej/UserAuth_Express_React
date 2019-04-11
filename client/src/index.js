import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ForgotPassword from './components/auth/ForgotPassword';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
    </BrowserRouter>
    </Provider>


    , document.getElementById('root'));

