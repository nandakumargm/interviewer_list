import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const expertise = this.getExpertise.value;
    const code = this.getCode.value; 
    const data = {
      newTitle,
      newMessage,
      expertise,
      code
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <span class="close-button" onClick={() => this.props.dispatch({ type: 'CLOSE_POST', id: this.props.post.id })}>X</span>
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={(input) => this.getTitle = input}
            defaultValue={this.props.post.title} placeholder="Please Enter Name" /><br /><br />
          <input required type="text" ref={(input) => this.getCode = input}
            defaultValue={this.props.post.code} placeholder="Please Enter Candidate Code" /><br /><br />
          <input required type="text" ref={(input) => this.getExpertise = input}
            defaultValue={this.props.post.expertise} placeholder="Please Enter Expertise" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getMessage = input}
            defaultValue={this.props.post.message} cols="28" placeholder="Please Enter Candidature Description" /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);