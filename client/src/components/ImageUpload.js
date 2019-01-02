import Dropzone from 'react-dropzone';
import React, {Component} from 'react';

  const activeStyle = {
    borderStyle: 'solid',
    borderColor: '#6c6',
    backgroundColor: '#eee'
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  }
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state = {files: []};
    }

    handleOnDrop = (files) => {
        this.setState({
            files: [...this.state.files, ...files.map(file => Object.assign(file, {
              preview: URL.createObjectURL(file)
            }))]
          });
        this.props.addFiles(files);
    }

    componentWillUnmount() {
        this.state.files.forEach(file => URL.revokeObjectURL(file.preview))
      }

    render(){
        const thumbs = this.state.files.map(file => (
        <div style={thumb} key={ file.name+Date.now() }>
            <div style={thumbInner}>
              <img src={file.preview} style={img} />
            </div>
        </div>
        ));
          
        return (
            <React.Fragment>
              <Dropzone {...this.props.imagenProps} multiple={true} accept="image/*" maxSize={0.5*1024*1024} onDrop={this.handleOnDrop} >
                  {
                    ({ getRootProps, getInputProps, isDragReject}) => 
                      (
                        <div {...getRootProps()} style={activeStyle} >
                            <input {...getInputProps()} />
                            <div>
                                <h4>Arrastra archivos aquí...</h4>
                                <p>Tamaño máximo por imagen: 500 kb</p>
                                {thumbs}
                            </div>
                            { isDragReject && <div>Unsupported file type...</div> }
                        </div>
                      )
                  }
              </Dropzone>
            </React.Fragment>
        )
    }
}
export default ImageUpload;