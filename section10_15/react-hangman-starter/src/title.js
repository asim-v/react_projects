import React from "react"

class Title extends React.Component {

    handleReset(){
        this.props.reset()
    }

    render(){
        return(
            <section>                
                <h1>{this.props.content}</h1>
                {this.props.win === "lost"?
                    <button className="title_button" onClick={this.handleReset.bind(this)}>Try again?</button>
                :null}
                {this.props.win === "win"?
                    <button className="title_button" onClick={this.handleReset.bind(this)}>Play again?</button>
                :null}
            </section>
        )
    }
}

export default Title