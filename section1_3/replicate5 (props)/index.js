class App extends React.Component {
    render(){
        return(
            <div>
                <Hello 
                    from="Emilio" 
                    to="Julio" 
                    message="Una disculpa por ser un terrible amigo"
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u2ylh2IDUyOVUfdeR041bfEPSOXujN9KDd61A4f5cBAcHEe5-duW8JN-aLdNmmb3yBw&usqp=CAU"
                    stars={1}
                />        
                <Hello 
                    from="Alex" 
                    to="John" 
                    message="Nice to meet you!" 
                    // Can only do string "3" or brackets {3}
                    num={3} 
                    //Can pass in booleans like this
                    isFunny={true}
                    //Cna pass in booleansa also like this
                    isFunny
                    data={[1,2,3,4,5]}
                    stars={5}
                    img="https://images.vexels.com/media/users/3/202315/isolated/lists/7fb3c4ef9e3869af7d0985811efce923-small-leaf-doodle.png"
                ></Hello>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))