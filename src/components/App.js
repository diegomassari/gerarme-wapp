import React from 'react'
import Routes from '../routes'

import '../assets/css/site.css'
import '../assets/css/v2.css'
import '../assets/css/bootstrap/bootstrap-extend.min.css'
import '../assets/fonts/web-icons/web-icons.min.css'
import '../assets/fonts/font-awesome/font-awesome.min.css'
import '../assets/fonts/brand-icons/brand-icons.min.css'

const App = () => <Routes/>

/*
class App extends React.Component {  
  render(){
    return (
      <Router>
        <div id="wrapper">
          <Switch>
            <RouteLayout key="home" exact path="/" component={HomePage}/>
            <RouteLayout key="posts" path="/posts" component={PostsPage}/>
            <RouteLayout key="configs" path="/configs" component={ConfigsPage}/>
            <Route key="login" path="/login" component={Login}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
*/

export default App