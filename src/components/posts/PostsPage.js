import React from 'react'
import PostCard from '../posts/PostCard'
import AppPageheader from '../layout/AppPageheader'
import { getToken } from "../../services/auth"

class PostPage extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: false,
            posts: []
        }
    }

    componentDidMount= async e => {

        this.setState({isLoading: true})

        fetch("http://gerarme-api.test/api/posts/my", {
                    method: 'GET',
                    headers: {
                    'Authorization': 'Bearer' + getToken()
                    }
                }) 
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false, posts: data})
            })
    }

    render(){
        const aposts = this.state.posts.map((postItem) => 
                <PostCard key={postItem.id} value={postItem.id} post={postItem} />
            );

        return (
            <div>
                <AppPageheader header="Posts" detail="Todos os dias 8 opções de acordo com suas configurações" />
                <div className="page-content">
                    <ul className="blocks blocks-100 blocks-xxl-4 blocks-lg-4 blocks-md-3 blocks-sm-2" style={{position: "relative"}}>    
                        {aposts}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostPage