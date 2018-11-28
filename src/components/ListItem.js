import React from "react";
import PropTypes from "prop-types";

// Auxillary Packages
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteNote } from "../actions";

// Purgatorial Packages
import { Link } from "react-router-dom";

// CSS
import "../CSS/ListItem.css";

class ListItem extends React.Component {
    static propTypes = {
        deleteNote: PropTypes.func,
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object,
        note: PropTypes.object
    };
    render() {
        return (
            <div className="note-card">
                <Link
                    style={{ color: "black" }}
                    to={{
                        pathname: `${this.props.note.title}/${
                            this.props.note._id
                        }`,
                        state: {
                            note: this.props.note
                        }
                    }}
                >
                    <h2
                        style={{ whiteSpace: "pre-line" }}
                        className="note-card-title"
                    >
                        {this.props.note.title.length > 15
                            ? this.props.note.title.slice(0, 50) + " ..."
                            : this.props.note.title}
                    </h2>
                </Link>
                <p
                    style={{ whiteSpace: "pre-line" }}
                    className="note-card-text font-weight-light"
                >
                    {this.props.note.textBody.length > 100
                        ? this.props.note.textBody.slice(0, 50) + " ..."
                        : this.props.note.textBody}
                </p>
            </div>
        );
    }
}

export default withRouter(
    connect(
        null,
        { deleteNote }
    )(ListItem)
);
