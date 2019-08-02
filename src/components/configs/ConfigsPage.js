import React from 'react'
import AppPageheader from '../layout/AppPageheader'
import FormLogo from './FormLogo'
import FormCategories from './FormCategories'

class ConfigsPage extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading: true,
            configs: {}
        }

        //Todos as functions de eventos devem ser feitos binds no constructor
        this.handleSaveLogo = this.handleSaveLogo.bind(this)
    }

    handleSaveLogo(){
        //Inverte isLoadingState
        //Exemplo - Handler de Evento
        this.setState(prevState => {
            return {
                isLoading: !prevState.isLoading
            }
        })
    }

    render(){
        return (
            <div>
                <AppPageheader header="Configure seu Negócio" detail="Precisamos saber mais sobre seu negócio" />
                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4">   
                            <FormLogo/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4">   
                            <FormCategories/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfigsPage