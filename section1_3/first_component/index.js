// There's also the function component to write elements, which are more relevant with react hooks
// For now we are using the class-based syntax


class Hello extends React.Component{
	render(){
		// Can only return one thing
		return( 
		<div>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
		</div>
		)
	}
}
ReactDOM.render(<Hello/>,document.getElementById('root'))


// function Hello(){
// 	return(
// 		<div>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 		</div>		
// 	)
// }
// ReactDOM.render(<Hello/>,document.getElementById('root'))
