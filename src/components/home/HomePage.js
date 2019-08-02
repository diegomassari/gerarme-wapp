import React from 'react'
import '../../App.css'

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <div className="page-header h-200">
                    <div className="text-center blue-grey-800 mt-30 m-xs-0">
                    <div className="font-size-50 blue-grey-800"><b>Olá</b> Diego Massari </div>
                    </div>
                </div>
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{height:"236"}}>
                            <div className="panel panel-line">
                            <div className="panel-heading">
                                <h3 className="panel-title">Nossas Redes Sociais</h3>
                            </div>
                            <div className="panel-body">
                                <p>
                                Siga-nos e fique por dentro das novidades e tenha acesso a muitas dicas de como usar suas redes sociais para conseguir novos clientes todos os dias!
                                </p>
                                <a className="btn btn-tagged social-facebook" target="_blank" href="http://fb.me/gerarmeoficial" rel="noopener noreferrer">
                                <span className="btn-tag btn-sm"><i className="icon bd-facebook" style={{marginTop: "-15px"}} aria-hidden="true"></i></span>Facebook
                                </a>
                                <a className="btn btn-tagged social-instagram" target="_blank" href="http://instagram.com/gerar.me" rel="noopener noreferrer">
                                <span className="btn-tag btn-sm"><i className="icon bd-instagram" style={{marginTop: "-15px"}} aria-hidden="true"></i></span>Instagram
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{height: "236px"}}>
                            <div className="panel panel-line">
                                <div className="panel-heading">
                                <h3 className="panel-title">Seus Conteúdos de Hoje</h3>
                                </div>
                                <div className="panel-body">
                                    <p>
                                        Todos os dias você tem 8 opções de conteúdos, feito por profissionais para postar em suas redes sociais e aumentar sua autoridade, engajamento e clientes!
                                    </p>
                                    <a className="btn btn-tagged btn-success" href="/posts">
                                        <span className="btn-tag btn-sm"><i className="icon wb-gallery" style={{marginTop:"-15px"}} aria-hidden="true"></i></span>Ir para Posts
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" style={{height: "236px"}}>
                            <div className="panel panel-line">
                                <div className="panel-heading">
                                <h3 className="panel-title">Precisando de Ajuda?</h3>
                                </div>
                                <div className="panel-body">
                                    <p>
                                    Assinantes tem acesso a suporte via e-mail. <br/>
                                    Envie qualquer tipo de dúvida ou problema, teremos o maior prazer em ajudar!
                                    </p>
                                    <a className="btn btn-tagged btn-info" href="mailto:suporte@gerar.me">
                                    <span className="btn-tag btn-sm"><i className="icon wb-help" style={{marginTop: "-15px"}} aria-hidden="true"></i></span>Envie-nos um e-mail
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage