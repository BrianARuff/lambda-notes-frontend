import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotesByUserId } from "../actions/index";

class NotesByUserId extends React.Component {
  componentDidMount() {
    const id = window.location.href.split("/").slice(-2)[0];
    this.props.getNotesByUserId(id);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notesById: state.notesById,
    isGettingNotesById: state.isGettingNotesById
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getNotesByUserId }
  )(NotesByUserId)
);
