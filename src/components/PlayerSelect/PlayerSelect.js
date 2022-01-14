import React from "react";
import { PartyList } from "../";


class PlayerSelect extends React.Component {
  constructor() {
    super();
    this.state = {
        numPlayers: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
        numPlayers: document.getElementById("number-of-players").value,
    });
  }
  render() {
    return (
      <>
        <div id="player-select">
            <label htmlFor="number-of-players">Party Size:</label>
            <select name="players" id="number-of-players" onChange={this.handleChange}>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
              <option value="6">Six</option>
              <option value="7">Seven</option>
              <option value="8">Eight</option>
            </select>
        </div>
        <PartyList 
          // handleChange={this.handleChange}
          numPlayers={this.state.numPlayers}
        />
      </>
    );
  }
}

export default PlayerSelect;



// class MainWrapper extends React.Component {
//   constructor() {
//       super();
//       this.state = {
//           sidbarPushCollapsed: false,
//           profileCollapsed: false
//       };
//       this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//       this.setState({
//           sidbarPushCollapsed: !this.state.sidbarPushCollapsed,
//           profileCollapsed: !this.state.profileCollapsed

//       });
//   }
//   render() {
//       return (
//          //...
//          <Header 
//              handleClick={this.handleClick} 
//              sidbarPushCollapsed={this.state.sidbarPushCollapsed}
//              profileCollapsed={this.state.profileCollapsed} />
//       );