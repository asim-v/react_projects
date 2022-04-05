function getFruits(e){
    function RE(elements){
        return elements[Math.floor(Math.random()*elements.length)]
    }
    return ([RE(e) , RE(e) , RE(e)])

}

class Machine extends React.Component {

    sort(){
        console.log('hola')
        var fruits = getFruits(this.props.fruits)
        this.setState({'fruits':fruits})
    }    
    render(){
        var fruits = getFruits(this.props.fruits)
        console.log(fruits)

        return(
            // Class name so the name doesn't conflict with the other one
            <div className="slotMachine">
                <h1>Welcome to the machine!</h1>
                {fruits[0] === fruits[1] & fruits[1] === fruits[2] ?
                <h3 className="success">Congratulations!</h3> :<h3 className="failiure">Better luck next time</h3> }
                <h3 className="slotFruits">{fruits}</h3>
                <button className="slotButton" onClick={this.sort.bind(this)}>Sort me!</button>
            </div>
        )
    }
}