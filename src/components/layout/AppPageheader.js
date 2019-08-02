import React from 'react'

class AppPageheader extends React.Component{

    render(){
        return (
            <div className="page-header page-header-bordered">
                <h1 className="page-title">{this.props.header}</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                        {this.props.detail}
                    </li>
                </ol>
            </div>
        )
    }
}

export default AppPageheader