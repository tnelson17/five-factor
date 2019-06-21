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
    this.setState({
      clicked: true,
      value: parseInt(event.target.value) })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleQuestionSubmit({
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
          <div>
            <label>
              <input
                type="radio"
                value={4}
                checked={this.state.value === 4}
                onChange={this.handleChange}
              />
              Strongly Agree
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value={3}
                checked={this.state.value === 3}
                onChange={this.handleChange}
              />
              Moderately Agree
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value={2}
                checked={this.state.value === 2}
                onChange={this.handleChange}
              />
              Neither Agree nor Disagree
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value={1}
                checked={this.state.value === 1}
                onChange={this.handleChange}
              />
              Moderately Disagree
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value={0}
                checked={this.state.value === 0}
                onChange={this.handleChange}
              />
              Strongly Agree
            </label>
          </div>
        <button/>
      </form>
    )}
  }

export default Question;
