import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


class AppNavbar extends React.Component{
    render(){
        return (
            <nav className="site-navbar navbar navbar-default navbar-fixed-top navbar-inverse bg-indigo-600" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggler hamburger hamburger-close navbar-toggler-left hided" data-toggle="menubar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="hamburger-bar"></span>
                    </button>
                    <button type="button" className="navbar-toggler collapsed" data-target="#site-navbar-collapse" data-toggle="collapse">
                        <i className="icon wb-more-horizontal" aria-hidden="true"></i>
                    </button>
                    <div className="navbar-brand navbar-brand-center">
                        <img className="navbar-brand-logo" alt="logo" style={{maxHeight:'18px', marginTop:'5px'}} src="http://my.gerar.me/images/gerarmelogo_branco.png" title="Gerar.me"/>
                    </div>
                </div>
                
                <div className="navbar-container container-fluid">
        
                    <div className="collapse navbar-collapse navbar-collapse-toolbar" id="site-navbar-collapse">
        
                    <ul className="nav navbar-toolbar">
                        
                    </ul>
        
        
                    <ul className="nav navbar-toolbar navbar-right navbar-toolbar-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link" data-toggle="dropdown" href="/" aria-expanded="false" data-animation="scale-up" role="button">
                                <i className="icon wb-user" aria-hidden="true"></i>
                            </a>    
                            <div className="dropdown-menu" role="menu">
                                <Router>
                                <Link className="dropdown-item" to="/configs" role="menuitem">
                                    <i className="icon wb-settings" aria-hidden="true"></i> Configurações
                                </Link>
                                <div className="dropdown-divider" role="presentation"></div>
                                <Link className="dropdown-item" to="/logout" role="menuitem">
                                    <i className="icon wb-power" aria-hidden="true"></i> Logout
                                </Link>
                                </Router>
                            </div>
                        </li>
                    </ul>
        
                    </div>
            
                </div>
            </nav>
            )
    }
}

export default AppNavbar


