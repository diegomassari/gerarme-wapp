import React from 'react'

class AppFooter extends React.Component{
    render(){
        return(
            <footer className="site-footer">
                <div className="site-footer-legal">© 2019 <a href="https://gerar.me">Gerar.me</a></div>
                <div className="site-footer-right">
                    Feito com <i className="red-600 wb wb-heart"></i>
                </div>
            </footer>
        )
    }
}

export default AppFooter