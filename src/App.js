import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{

    state = {advice: ''};

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            
            this.setState({advice: response.data.slip.advice});
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render(){

        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{this.state.advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
                </div>
            </div>
            
        )
    }
}

export default App;