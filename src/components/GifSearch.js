import React, { Component } from 'react';

class GifSearch extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    this.props.onChangeValue(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitValue();
    this.setState({
      value:''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default GifSearch;
