import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
    formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  render() {
    return (
      <div className="post">
        <div className="header-wrapper">
          <h2 className="post_title">{this.props.post.title}</h2>
          <h2 className="post_title message_text"><span className="skills">Skills:</span><span>{this.props.post.expertise}</span></h2>
        </div>
        <div className="header-wrapper">
          <p class="description-message">
          {this.props.post.message}
          </p>
        </div>
        <div className="control-buttons">
          <div className="col-md-6 wrapper-date p-0">
            <div className="col-md-12 date">
              Date: <span className="date-formatted">{this.formatDate(this.props.post.id)}</span>
            </div>
            <div className="col-md-12 date">
              Candidate Code: <span className="date-formatted">{this.props.post.code}</span>
            </div>
          </div>
          <div className="col-md-6 action-buttons">
            <button className="edit"
              onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
              }
            >Edit</button>
            <button className="delete"
              onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
            >Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Users);