class App extends React.Component {
    render(){
        return(
            <Machine fruits={['🍇','🍈','🍉']}/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))