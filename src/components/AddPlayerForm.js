import React, {Component} from "react";

class AddPlayerForm extends Component{
  textInput = React.createRef();

  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.textInput.current.value);
    e.currentTarget.reset();
    /*
    const form = document.getElementById("form");
    const player = document.getElementById("player");
    console.log(form.checkValidity());
    console.log(player.validity.valid);
    this.props.addPlayer(this.state.value);
    this.setState({
      value: ''
    });*/
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} placeholder="enter a player's name"/>
        <input type="submit" value="Add Player"/>
      </form>
    )
  }
}

export default AddPlayerForm;