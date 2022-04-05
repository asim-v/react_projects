function generateEmotion(){
    var emotions = ['happy','sad','angry']
    return emotions[Math.floor(Math.random()*emotions.length)]
}

class MySection extends React.Component {
    render(){
        return(
        <div>
            My current mood is: {generateEmotion()}
        </div>
        )
    }
}

ReactDOM.render(<MySection/>,document.getElementById('root'));