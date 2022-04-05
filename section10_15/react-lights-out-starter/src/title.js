import React from 'react'
import './title.css'

class Title extends React.Component {
    render(){
        // console.log(this.props.hasWon)
        return(
            <section className="title">
                {
                this.props.hasWon === null?
                    <h1>Lights out!</h1>
                :null}
                {
                this.props.hasWon === true?
                    <h1>You Win!!</h1>
                :null}
                {
                this.props.hasWon === false?
                    <h1>You Lose!</h1>
                :null}
            </section>
        )
    }
}

export default Title