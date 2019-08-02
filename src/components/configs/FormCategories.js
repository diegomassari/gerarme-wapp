import React from 'react'
import { getToken, getUser } from "../../services/auth"
import api from "../../services/api"
import 'react-image-crop/dist/ReactCrop.css'

class FormCategories extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true,
            categoriesPrimary: [],
            categoriesSecondary: [],
            category1: '',
            category2: '',
            userId: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    componentDidMount(){
        fetch("http://gerarme-api.test/api/postcategories", {
                method: 'GET',
                headers: {
                'Authorization': 'Bearer' + getToken()
                }
            }) 
        .then(response => response.status === 401 ? window.location.replace("/login") : response.json())
        .then(data => {
            this.setState({isLoading: false, categoriesPrimary: data, categoriesSecondary: data})
        })

        fetch("http://gerarme-api.test/api/user/my/categories", {
                method: 'GET',
                headers: {
                'Authorization': 'Bearer' + getToken()
                }
            }) 
        .then(response => response.status === 401 ? window.location.replace("/login") : response.json())
        .then(data => {
            this.setState({isLoading: false, category1: data[0] ? data[0].id : '', category2: data[1] ? data[1].id : ''})
        })

        this.setState({userId: getUser()})
    }

    handleSubmit = async e => {

        e.preventDefault();
        const { category1, category2, userId } = this.state

        const categories = [category1, category2]

        if (!category1 || !userId) {
            this.setState({ error: "Escolha a categoria principal antes de salvar" })
        } else {
            try {

                const response = await api.post("/api/user/attachcategories", { categories, userId })

                if(response.status === 200){
                    console.log('success: formCategories')
                } else if(response.status === 401) { 
                    //Unauthorized
                    window.location.replace("/login")
                } else {
                    console.log('error on saving')
                    console.log(response)
                }

                //login(responseLogin.data.access_token)
                //this.props.history.push("/")

            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                })
            }
        }

    }

    render(){

        const availableCategoriesPrimary = this.state.categoriesPrimary.map((cat) => 
                <option key={cat.id} value={cat.id} >{cat.name}</option>
            );
        const availableCategoriesSecondary = this.state.categoriesSecondary.map((cat) => 
                <option key={cat.id} value={cat.id}>{cat.name}</option>
            );

        return(
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">Categorias</h3>
                </div>
                <div className="panel-body container-fluid">
                    <form onSubmit={this.handleSubmit}>                      
                        <div className="row row-lg">
                            <div className="col-lg-12">
                                <label>Categoria #1 <small>Obrigatória</small></label>
                                <select name="category1" className="form-control" aria-hidden="true" required value={this.state.category1} onChange={this.handleChange}>
                                    <option key="" value=""></option>
                                    {availableCategoriesPrimary}
                                </select>
                            </div>
                            <div className="col-lg-12" style={{marginTop: 15}}>
                                <label>Categoria #2 <small>Opcional</small></label>
                                <select name="category2" className="form-control" aria-hidden="true" value={this.state.category2} onChange={this.handleChange}>
                                    <option key="" value=""></option>
                                    {availableCategoriesSecondary}
                                </select>
                            </div>
                            <div className="col-lg-12">
                                <span className="text-help">Caso não encontre uma categoria para seu negócio, solicite a criação por <a style={{cursor: 'pointer'}} data-target="#exampleFormModal" href="/" data-toggle="modal"><u>aqui</u></a>.</span>
                            </div>
                        </div> 
                        <input type="submit" className="btn btn-success mt-20" value="Salvar" />
                    </form>
                </div>
            </div>
        )
    }
}

export default FormCategories