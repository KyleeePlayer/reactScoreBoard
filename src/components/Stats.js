import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';
const Stats = (props) => {
  const totalPlayers = props.players.length;
  //lodash sum함수
  const totalScore = _.sumBy(props.players, 'score');
  //reduce함수
  //const totalScore = props.players.reduce((total, players) => total + players.score, 0);

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>Total Points:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  )
}

Stats.propTypes ={
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}
export default Stats;