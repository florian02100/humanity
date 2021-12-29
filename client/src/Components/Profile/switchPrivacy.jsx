import React, { Component } from "react";
import Switch from "react-switch";
import './switchPrivacy.css'

class SwitchPrivacy extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="SwitchArea">
        <Switch             
            onColor="#ff9C9D"
            onHandleColor="#ff1b1c"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            id="material-switch"
            className="switchPrivacy" 
            onChange={this.handleChange} 
            checked={this.state.checked} />
        <span className="labelSwicthPrivacy">Privé</span> 
      </div>
    );
  }
}
export default SwitchPrivacy;