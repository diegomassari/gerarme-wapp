import React from 'react'
import '../../assets/css/login.css'

import api from "../../services/api";
import { login } from "../../services/auth";

class ResetPassword extends React.Component {
    constructor(){
        super()
        this.state = {
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleFormSubmit = async e => {

        e.preventDefault();
        const { email } = this.state;

        if (!email) {
            this.setState({ error: "Preencha e-mail para continuar!" });
        } else {
            try {
                const response = await api.post("/auth/login", { email });
                login(response.data.access_token);
                this.props.history.push("/");
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                });
            }
        }
    };

    render(){
        return (
            <div className="page vertical-align text-center" style={{marginLeft: 0, minHeight: "100%"}} data-animsition-in="fade-in" data-animsition-out="fade-out">
                <div className="page-content vertical-align-middle animation-slide-top animation-duration-1">
                    <h2>Esqueceu a Senha?</h2>
                    <p>Informe seu e-mail de cadastro</p>

                    <form onSubmit={this.handleFormSubmit}>
                        <div className="form-group row">
                            <input id="email" type="email" className="form-control " name="email" value="" required="" autoComplete="email" autoFocus="" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group row mb-0">
                            <button type="submit" className="btn btn-primary btn-block">
                                Enviar Solicitação de Nova Senha
                            </button>
                        </div>
                    </form>

                    <footer className="page-copyright">
                        <p>Gerar.me</p>
                        <p>© 2019. Todos os Direitos Reservados.</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default ResetPassword






