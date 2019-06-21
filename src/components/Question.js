import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      value: '',
      domain: this.props.domain,
      id: this.props.id
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let newValue = parseInt(event.target.value)

    this.props.handleQuestionSubmit({
      id: this.state.id,
      value: newValue,
      domain: this.state.domain
    })
    this.setState({
      clicked: true,
      value: newValue
    })
  }

  render(){
    console.log(this.state);
    return (
      <>
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
              Strongly Disagree
            </label>
          </div>
      </>
    )}
  }

export default Question;
