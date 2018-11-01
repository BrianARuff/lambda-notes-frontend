import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotesByUserId } from "../actions/index";

class NotesByUserId extends React.Component {
  componentDidMount() {
    const id = window.location.href.split("/").slice(-3)[1];
    this.props.getNotesByUserId(id);
  }

  render() {
    return (
      <div>
        {this.props.notesById.map((note, i) => {
          if (i === 0) {
            return <h4>{note.username}</h4>;
          }
          return (
            <div>
              <h4>{note.title}</h4>
              <p>{note.textBody}</p>
            </div>
          );
        })}
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
