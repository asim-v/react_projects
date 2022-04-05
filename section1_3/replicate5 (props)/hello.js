class Hello extends React.Component {   
    render(){
        console.log(this.props)    
        var stars = "⭐".repeat(this.props.stars)
        // this.props.to = "Alexandro"  Read only! Props are inmutable!
        return(            
            <div>
                <img src={this.props.img}/>
                <h3>Hello! from {this.props.from} to {this.props.to} {stars}</h3>
                <p>{this.props.message}</p>
                <p>Message data:{this.props.data}</p>
                <p>Message number:{this.props.number}</p>
            </div>
            
        )
    }
}