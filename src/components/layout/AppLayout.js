import React from 'react';
import AppNavbar from './AppNavbar'
import AppSidebar from './AppSidebar'
 
const AppLayout = ({ children, ...rest }) => {
    return (
        <div id="wrapper" style={{paddingTop: 66}}>
            <AppSidebar/>
            <AppNavbar/>
            <div className="page">
                {children}
            </div>
        </div>
    )
  }
 
export default AppLayout;