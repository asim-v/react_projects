class App extends React.Component {
    render() {
        return(
            <div>
                <Hello/>
                <Randomizer/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))