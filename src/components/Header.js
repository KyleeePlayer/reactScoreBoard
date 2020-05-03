import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";
import PropTypes from "prop-types";
const Header = ({players, title}) => {
  //console.log(props);
  //props를 파라미터로 받으면 이렇게 해도 됨
  //const {players, title} = props;
  return (
    <header>
      <Stats players={players}/>
      <h1>{ title }</h1>
      <Stopwatch/>
      {/*<span className="stats">Players: { props.totalPlayers }</span>*/}
    </header>
  )
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header;