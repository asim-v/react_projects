import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import Title from './title'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    function RE(elements){
      return elements[Math.floor(Math.random()*elements.length)]
    }

    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: RE(this.props.words) ,
      title:"Hangman",      
      win:"",
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */

  defeat(){
    this.setState(currState=>({title:"You lose!"})) //Displays defeat
    this.setState(currState=>({win:"lost"})) //Displays defeat
    var all_guessed = new Set("abcdefghijklmnopqrstuvwxyz".split(""))
    this.setState(currState=>({guessed:all_guessed}))
    console.log('Defeat!')
  }

  win(){
    this.setState(currState=>({title:"You win!"})) //Displays defeat
    this.setState(currState=>({win:"win"})) //Displays defeat
    var all_guessed = new Set("abcdefghijklmnopqrstuvwxyz".split(""))
    this.setState(currState=>({guessed:all_guessed}))
    console.log('Win!')
  }

  handleGuess(evt) {
    
    //There was a problem where apparently making the callback was delaying the vairable call, maybe the right approach is to put the continuation inside the callback instead of the rest of the code but it seems stable now

    let ltr = evt.target.value;
    this.setState({
      guessed: this.state.guessed.add(ltr),
      nWrong: this.state.nWrong + (this.state.answer.includes(ltr) ? 0 : 1)
    })
    
    if (this.state.nWrong === this.state.answer.length){
      this.defeat()
    }

    // console.log(this.state.guessed.has('a'),this.state.guessed)

    var count = 0
    for (let i = 0; i < this.state.answer.length;i++){      
      if(this.state.guessed.has(this.state.answer.split("")[i])){
        count = count+1        
      }      
    }
    if (count === this.state.answer.length){
      this.win()
    }
    
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  reset(){

    function RE(elements){
      return elements[Math.floor(Math.random()*elements.length)]
    }

    this.setState(currState=>({
      guessed:new Set(),
      title:"Hangman",      
      win:"",
      nWrong:0,
      answer: RE(this.props.words)
    }))
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <Title content={this.state.title} win={this.state.win} reset={this.reset}></Title>
        <img src={this.props.images[this.state.nWrong]} />
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <p className='Hangman-btns'>{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;
