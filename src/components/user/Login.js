import React from 'react'
import '../../assets/css/login.css'
import { Link } from 'react-router-dom'

import api from "../../services/api"
import { login, user } from "../../services/auth"

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSignIn = async e => {

        e.preventDefault();
        const { email, password } = this.state

        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" })
        } else {
            try {
                const responseLogin = await api.post("/auth/login", { email, password })
                login(responseLogin.data.access_token)

                const responseUser = await api.post("/auth/me", { })
                user(responseUser.data.id)

                this.props.history.push("/")
            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                })
            }
        }

    }

    render(){
        return (
            <div className="animsition page-login-v2 layout-full page-dark vsc-initialized">
                <div className="page" data-animsition-in="fade-in" data-animsition-out="fade-out">
                    <div className="page-content">
                        <div className="page-brand-info">
                        <div className="brand">
                            <img className="brand-img" style={{maxHeight: 50}} src="{{ asset('images/gerarmelogo_branco.png') }}" alt="..."/>
                        </div>
                        <p className="font-size-18">Conteúdo Profissional para redes sociais</p>
                        </div>

                        <div className="page-login-main animation-slide-right animation-duration-1">
                        <div className="brand hidden-md-up">
                            <img className="brand-img" src="{{ asset('images/gerarmelogo.png') }}" style={{height: 50}} alt="..."/>
                        </div>
                        <h3 className="font-size-24">Entrar</h3>

                        <form onSubmit={this.handleSignIn}>
                            <div className="form-group">
                                <label className="sr-only">E-mail</label>
                                <input id="email" type="email" className="form-control" name="email" value={this.state.email} required autoComplete="email" autoFocus onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Senha</label>
                                <input id="password" type="password" className="form-control" name="password" value={this.state.password}  required autoComplete="current-password" onChange={this.handleChange} />
                            </div>
                            <div className="form-group clearfix">
                                <div className="checkbox-custom checkbox-inline checkbox-primary float-left">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label>Lembrar-me</label>
                                </div>
                                <Link className="float-right" to="/user/resetpassword">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                        </form>

                        <p>Não tem conta? <a href="https://gerar.me">Saiba mais</a></p>

                        <footer className="page-copyright">
                            <p>Gerar.me</p>
                            <p>© 2019. Todos os Direitos Reservados.</p>
                        </footer>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login






