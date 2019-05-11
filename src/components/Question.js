import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      submitted: false,
      value: '',
      previousValue: '',
      domain: this.props.domain,
      id: this.props.id
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      clicked: true,
      value: parseInt(event.target.value) })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleFormSubmit({
      id: this.state.id,
      value: this.state.value,
      domain: this.state.domain
    })
    this.setState({
      submitted: true,
      previousValue: this.state.value
    })
  }

  render(){
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div> {this.props.text} </div>
        <select onChange={this.handleChange}name={this.props.id}>
          <option value={0}>---</option>
          <option value={4}>Strongly Agree</option>
          <option value={3}>Moderately Agree</option>
          <option value={2}>Neither Agree nor Disagree</option>
          <option value={1}>Moderately Disagree</option>
          <option value={0}>Strongly Disagree</option>
        </select>
        <button/>
      </form>
    )}
  }

export default Question;
