import Header from './components/Header'
import Player from "./components/Player";
import React from 'react';
import AddPlayerForm from "./components/AddPlayerForm";
import './App.css';

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1, score: 0},
      {name: 'HONG', id: 2, score: 5},
      {name: 'KIM', id: 3, score: 0},
      {name: 'PARK', id: 4, score: 8},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }
  handleChangeScore = (id, delta) => {
    console.log(id,delta);
    this.setState(prevState => {
      prevState.players.forEach(item => {
        if(item.id === id+1){
          item.score += delta;
        }
      })
      return {players: [...prevState.players]}
    })
  }
  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const maxId = prevState.players.reduce((max, player) => {
        return max > player.id ? max : player.ud;
      }, 0);

      return {
        players: [
          ...prevState.players,
          {id: maxId +1, name, score: 0}
        ]
      }
    });
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players} />

        {/*Players List*/}
        { this.state.players.map((item, index) =>
          <Player name={item.name} score={item.score} key={item.id.toString()}
                  removePlayer={this.handleRemovePlayer} changeScore={this.handleChangeScore}
                  index={index} id={item.id} />)
        }
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}


export default App;