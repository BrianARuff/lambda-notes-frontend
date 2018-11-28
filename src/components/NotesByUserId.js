import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getNotesByUserId } from "../actions/index";

class NotesByUserId extends React.Component {
    componentDidMount() {
        const id = window.location.href.split("/").slice(-3)[1];
        this.props.getNotesByUserId(id);
    }

    static propTypes = {
        getNotesByUserId: PropTypes.func,
        notesById: PropTypes.arrayOf(PropTypes.object)
    };

    render() {
        return (
            <div>
                {this.props.notesById.map((note, i) => {
                    if (i === 0) {
                        return (
                            <h4 key={Math.random() * 1000}>{note.username}</h4>
                        );
                    }
                    return (
                        <div key={Math.random() * 1000}>
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
