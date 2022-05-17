import React, { Component } from 'react';

class CreateFlightInput extends Component {
  state = {
    value: '',
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

//     handleTaskCreate = () => {
//         this.props.onCreate(this.state.value)
//         this.setState({ value: ''})
//   }
  
  render() {
    return (
      <div className="create-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="create-search__input"
          placeholder="Airline, destination or flight #"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn create-search__btn"
          // onClick={this.handleTaskCreate}
        >
          SEARCH
        </button>
      </div>
    );
  }
}




export default CreateFlightInput;

