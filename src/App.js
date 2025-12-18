//import logo from './logo.svg';
import './App.css';
//import Item from './MyItem';
import React from 'react';



class StarWars extends React.Component{
  constructor(){
    super()
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
      homeworld: null,
      affiliations: [],
    }
  }
  getNewCharacter(){
    const randomNumber = Math.round(Math.random()*88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          image: data.image,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          affiliations: data.affiliations,
          loadedCharacter: true,
    })
      )
    
  }
  render(){
    return(
      <div>
        {
          this.state.loadedCharacter ? (
           <div>
            <img src={this.state.image} className="photo" alt="alt img" />
              <h1>Name: {this.state.name}</h1>
              <p>Height: {this.state.height}</p>
              <p>Homeworld: {this.state.homeworld}</p>
              <p>Affiliations:</p>
              <ul>
                {this.state.affiliations.slice(0,5).map((aff,i) => (
                  <li key={i}>{aff}</li>
                ))}
              </ul>
           </div>
        ) :(
          <h1>Star Wars Character Generator</h1>
        )
      }
        <button type="button" onClick={()=>this.getNewCharacter()} 
        className="btn">Randomize Character</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
