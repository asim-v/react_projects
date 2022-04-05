class Nicebutton extends React.Component{
    render(){
        return(
            <div>
                <h3>The death of the human before the machine {2*3}</h3>
                <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0948f1d9-bcb1-4669-b416-9314c2ac2ec7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211012T212557Z&X-Amz-Expires=86400&X-Amz-Signature=b4538191814d3ddbf372f63bc00e41229ec45256e97fe003cd0c7e00654c2b9a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"/>
            </div>
            
        )
    }
}
ReactDOM.render(<Nicebutton/>,document.getElementById('root'))