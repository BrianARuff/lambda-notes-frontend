import React from "react";
import PropTypes from 'prop-types';

//CSS
import "../CSS/ConfirmDelete.css";

class ConfirmDelete extends React.Component {
  static propTypes = {
    confirmIt: PropTypes.func,
    handleDelete: PropTypes.func,
  }
  render() {
    return (
      <div onClick={this.props.confirmIt} className="delete-modal">
        <div className="delete-modal-content">
          <h2 className="delete-modal-title">Are you sure!?</h2>
          <button className="delete-btn btn" onClick={this.props.handleDelete}>Delete</button>
          <button className="no-btn btn"  onClick={this.props.confirmIt}>No</button>
        </div>
      </div>
    );
  }
}

export default ConfirmDelete;
