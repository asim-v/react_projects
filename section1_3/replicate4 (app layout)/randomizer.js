function RandomElement(elements){
    return elements[Math.floor(Math.random()*elements.length)]
}


class Randomizer extends React.Component{
    render(){
        const mood = RandomElement(['happy','sad','angry','crazy','psychotic'])
        var msg
        if (mood === 'crazy'){
            msg = 
            <div>
                <h3>Ora loka</h3>
                <img src="https://i.giphy.com/media/eaECZB7V6GACc/giphy.webp"></img>
            </div>}
        if (mood === 'psychotic'){
            msg = 
            <div>
                <h3>Send pastillas</h3>
                <img src="https://media4.giphy.com/media/3o7aD8Rili5TcXoL6w/giphy.gif?cid=ecf05e47yfv68blibdtmu6p85ky8jejqkf3tarb9adp8bf7h&rid=giphy.gif&ct=g"></img>
            </div>} 
        if (mood === 'angry'){
            msg = 
            <div>
                <h3>Ora loka</h3>
                <img src="https://i.giphy.com/media/aNFT7eG2rIKK715uLk/giphy.webp"></img>
            </div>}
        return(
            <div>
                <h1>{mood === 'happy'? 'Great day!':null}</h1>

                
                {
                mood === 'sad' 
                    ?<img src="https://i.giphy.com/media/dJYoOVAWf2QkU/giphy.webp"/>
                    :null
                }

                {msg} 
                
                <h3></h3>

            </div>
            
        )
    }
}