import React from 'react'
import { getUser } from "../../services/auth"
import api from "../../services/api"
import ReactCrop from "react-image-crop"
import 'react-image-crop/dist/ReactCrop.css'

class FormLogo extends React.Component {
    constructor(){
        super()
        this.state = {
            logoFile: null,
            userId: null,
            src: null,
            base64image: null,
            crop: {
                unit: "%",
                width: 100,
                aspect: 16 / 7
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = async e => {
        this.setState({userId: getUser()})

        const response = await api.get("/auth/mysession", {  })

        if(response.status === 200){
            console.log('componentDidMount: formLogo')
            this.setState({logoFile: 'http://gerarme-api.test/auth/storage/app/images/logos/' +response.data.logo})
        } else if(response.status === 401) {
          window.location.replace("/login")
        } else {
            console.log('error on saving')
            console.log(response)
        }
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    handleSubmit = async e => {

        e.preventDefault();
        const { base64image, userId } = this.state

        if (!base64image || !userId) {
            this.setState({ error: "Suba sua imagem de Logo para salvar" })
        } else {
            try {
                const response = await api.post("/api/user/logobase64", { base64image, userId })

                if(response.status === 200){
                    console.log('success: formLogo')
                    console.log(response.data)
                } else if(response.status === 401) {
                  window.location.replace("/login")
                } else {
                    console.log('error on saving')
                    console.log(response)
                }

            } catch (err) {
                this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais. T.T"
                })
            }
        }

    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener("load", () =>
            this.setState({ src: reader.result })
          );
          reader.readAsDataURL(e.target.files[0]);
        }
      };
    
      // If you setState the crop in here you should return false.
      onImageLoaded = image => {
        this.imageRef = image;
      };
    
      onCropComplete = crop => {
        this.makeClientCrop(crop);
      };
    
      onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        //this.setState({ crop: percentCrop });
        this.setState({ crop });
      };
    
      async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          const logoFile = await this.getCroppedImg(
            this.imageRef,
            crop,
            "newFile.png"
          );
          this.setState({ logoFile })
        }
      }
    
      getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas")
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext("2d")
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        )
    
        return new Promise((resolve, reject) => {

          const base64image = canvas.toDataURL('image/jpeg')

          this.setState({base64image: base64image}) 
          
          canvas.toBlob(blob => {
            if (!blob) {
              //reject(new Error('Canvas is empty'))
              console.error("Canvas is empty")
              return
            }
            blob.name = fileName
            window.URL.revokeObjectURL(this.fileUrl)
            this.fileUrl = window.URL.createObjectURL(blob)
            resolve(this.fileUrl)
          }, "image/png")

        })
      }

    render(){
        const { crop, logoFile, src } = this.state;

        return (
            <div className="panel">
                <div className="panel-heading">
                    <h3 className="panel-title">Logo</h3>
                </div>
                <div className="panel-body container-fluid">
                    <form onSubmit={this.handleSubmit}>    
                        <input type="file" onChange={this.onSelectFile} />
                        <div className="row">
                            <div className="CropComponent" style={{width: "100%"}}>
                                {src && (
                                    <ReactCrop
                                        src={src}
                                        crop={crop}
                                        onImageLoaded={this.onImageLoaded}
                                        onComplete={this.onCropComplete}
                                        onChange={this.onCropChange}
                                    />
                                )}
                                <br/>
                                {logoFile && ( <img alt="Crop" name="logoFile" id="logoFile" src={logoFile} /> )}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success mt-20">Salvar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormLogo