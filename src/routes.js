import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import ConfigsPage from './components/configs/ConfigsPage'
import PostsPage from './components/posts/PostsPage'
import Login from './components/user/Login'
import ResetPassword from './components/user/ResetPassword'
import AppLayout from './components/layout/AppLayout'

import { isAuthenticated } from "./services/auth"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ matchProps => (
        isAuthenticated() ? (
            <AppLayout>
                <Component {...matchProps} />
            </AppLayout>
        ) : (
            <Redirect to={{ pathname: "/", state: { from: matchProps.location } }} />
        )
    )} 
    />
);

const Routes = () => (
    <Router>
        <div id="wrapper">
        <Switch>
            <PrivateRoute key="home" exact path="/" component={HomePage}/>
            <PrivateRoute key="posts" path="/posts" component={PostsPage}/>
            <PrivateRoute key="configs" path="/configs" component={ConfigsPage}/>
            <Route key="login" path="/login" component={Login}/>
            <Route key="resetpassword" path="/user/resetpassword" component={ResetPassword}/>
        </Switch>
        </div>
    </Router>
);

export default Routes