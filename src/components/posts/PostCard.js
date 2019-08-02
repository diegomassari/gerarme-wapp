import React from 'react'
import { getToken } from "../../services/auth"


class PostCard extends React.Component {

    constructor(){
        super()
        this.state = {
            file: null
        }
        this.handleDownload = this.handleDownload.bind(this)
    }


    handleDownload(postId){
        var url = 'http://gerarme-api.test/api/post/download/'+postId
        var headers = {
            'Authorization': 'Bearer' + getToken()
            }
        var options = {
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default'
        }

        var request = new Request(url);

        fetch(request, options).then((response) => {
            response.arrayBuffer().then((buffer) => {
                
                var binary = ''
                var bytes = [].slice.call(new Uint8Array(buffer))

                bytes.forEach((b) => binary += String.fromCharCode(b))

                var imageStr = window.btoa(binary)

                this.downloadImage(imageStr)
            });
        });
    }

    downloadImage(image) {
        const linkSource = `data:image/jpg;base64,${image}`;
        const downloadLink = document.createElement("a");
        const fileName = "download.jpg";
    
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    render(){
        const image_url = "http://my.gerar.me/storage/app/images/Posts/"+this.props.post.image_url

        let modal

        if(this.props.post.headline !== ''){
            modal = <div className="modal fade" id="Modal596" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{zIndex: 9999}}>
                        <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Copie e Cole para Postar</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                                <textarea id="posttxt_{this.props.post.id}" className="form-control" rows="8" readOnly value={this.props.post.post_text}/>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" id="postbtn_596">Copiar</button>
                            </div>
                        </div>
                        </div>
                    </div>  
        }

        return (
            <li data-type="Feed" >
                <div className="card card-shadow">
                    <figure className="card-img-top overlay-hover overlay">
                        <img className="overlay-figure overlay-scale" src={image_url} alt="..."/>
                            <figcaption className="overlay-panel overlay-background overlay-fade overlay-icon">
                                <span className="icon wb-download"/>
                            </figcaption>
                    </figure>
                    <div className="card-block">
                        <span id="SPAN_49" className="sidebar-box">{this.props.post.headline}
                            <p className="read-more"></p>
                        </span>
                    </div>
                    <div className="btn-group btn-group-justified">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#Modal596">
                                <i className="icon wb-align-justify" aria-hidden="true"></i>
                                <span className="text-uppercase hidden-sm-down">Legenda</span>
                            </button>
                        </div>
                            
                        <div className="btn-group" role="group">
                            <button className="btn btn-success btn-sm" onClick={this.handleDownload.bind(this, this.props.post.post_id)}>
                                <i className="icon wb-download" aria-hidden="true"></i>
                                <span className="text-uppercase hidden-sm-down">Download</span>
                            </button>
                        </div>
                    </div>
                </div>

                {modal}
            </li>
        )
    }
}

export default PostCard