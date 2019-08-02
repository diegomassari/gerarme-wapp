import React from 'react'
import { Link } from 'react-router-dom'

class AppSidebar extends React.Component{
    render(){
        return (
            <div className="site-menubar site-menubar-dark hidden-sm-down">
                <div className="site-menubar-body">
                    <ul className="site-menu" data-plugin="menu" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <li className="site-menu-item">
                            <Link className="nav-link" to="/">
                                <i className="site-menu-icon wb-home" aria-hidden="true"></i>
                                <span className="site-menu-title">Home</span>
                            </Link>
                        </li>
                        <li className="site-menu-item">
                            <Link className="nav-link" to="/posts">
                                <i className="site-menu-icon wb-gallery" aria-hidden="true"></i>
                                <span className="site-menu-title">Posts</span>
                                <div className="site-menu-badge">
                                    <span className="badge badge-pill badge-success">8</span>
                                </div>
                            </Link>
                        </li>
                        <li className="site-menu-item">
                            <Link className="nav-link" to="/configs">
                                <i className="site-menu-icon wb-settings" aria-hidden="true"></i>
                                <span className="site-menu-title">Configs</span>
                            </Link>
                        </li>
                    </ul>  
                </div>
            </div>
        )
    }
}

export default AppSidebar