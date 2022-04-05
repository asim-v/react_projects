class Friends extends React.Component {
    static defaultProps = {
        Name:'Placeholder',
        Hobbies:'...', 
        stars:3,
        image:'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' 
    }          
    render(){
        var real_stars = "⭐".repeat(this.props.stars)
        var {name,hobbies} = this.props
        return(
            <div className="cardContainer">
                <img className="cardImage" src={this.props.image}/>
                <h1>{name}</h1> 
                {hobbies.map(h=><h3 className="cardHobby">{h}</h3>)}
                <h3>{real_stars}</h3>                 
            </div>
        )       
    }
}