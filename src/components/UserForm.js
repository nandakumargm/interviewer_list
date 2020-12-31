import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const code = this.getCode.value;
    const message = this.getMessage.value;
    const expertise = this.getExpertise.value
    const data = {
      id: new Date(),
      title,
      message,
      expertise,
      code,
      editing: false
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    })
    this.getTitle.value = '';
    this.getMessage.value = '';
    this.getExpertise.value = '';
    this.getCode.value = '';
  }
  render() {
    return (
      <Fragment>
      <h1 className="post_heading p-65">Interview <span className="feed-back">Feedback</span></h1>
      <div className="post-container col-md-6">
        <h1 className="post_heading2 p-65">Feedback <span className="feed-back">Form</span></h1>
        <form className="form" onSubmit={this.handleSubmit} >
          <input required type="text" ref={(input) => this.getTitle = input}
            placeholder="Candidate Name" /><br />
          <input required type="text" ref={(input) => this.getCode = input}
            placeholder="Candidate Code" /><br />
          <input required type="text" ref={(input) => this.getExpertise = input}
            placeholder="Candidate Technical Expertise" /><br />
          <textarea required rows="5" ref={(input) => this.getMessage = input}
            cols="28" placeholder="Candidature Description" /><br /><br />
          <button>Post</button>
        </form>
      </div>
      </Fragment>
    );
  }
}
export default connect()(UserForm);