import React from "react";
import PropTypes from "prop-types";

// Auxillary Packages
import { connect } from "react-redux";
import { deleteNote } from "../actions";
import { withRouter, Link } from "react-router-dom";

// Components
import ConfirmDelete from "./ConfirmDelete";

// CSS
import "../CSS/GotOne.css";

class GotOne extends React.Component {
    state = {
        showConfirm: false
    };

    static propTypes = {
        deleteNote: PropTypes.func,
        history: PropTypes.object,
        location: PropTypes.object,
        match: PropTypes.object,
    };

    confirmIt = () => {
        this.setState({
            showConfirm: !this.state.showConfirm
        });
    };

    handleDelete = () => {
        this.props.deleteNote(this.props.location.state.note.id);
        this.props.history.push("/");
    };

    render() {
        const { textBody, title, id, tags } = this.props.location.state.note;
        return (
            <div className="note-card single-card col-md-12 pos-relative got-one-card">
                <div className="edit-delete">
                    <p className="mx-3 font-weight-light">
                        <Link
                            style={{
                                color: "black",
                                fontWeight: "bold",
                                fontSize: "0.7rem"
                            }}
                            to={{
                                pathname: `/editForm/${title}/${id}`,
                                state: this.props.location.state.note
                            }}
                        >
                            Edit
                        </Link>
                    </p>
                    <p onClick={this.confirmIt}>Delete</p>
                </div>
                <h2 className="single-card-title">{title}</h2>
                <p
                    className="single-card-text font-weight-light"
                    style={{ whiteSpace: "pre-line", fontSize: "1.6rem" }}
                >
                    {textBody}
                </p>
                {this.state.showConfirm ? (
                    <ConfirmDelete
                        handleDelete={this.handleDelete}
                        confirmIt={this.confirmIt}
                    />
                ) : null}
                <small className="italic font-weight-light">
                    Tags:{" "}
                    {JSON.parse(tags)
                        .toString()
                        .split(", ")
                        .map(tag => tag.toUpperCase())}
                </small>
            </div>
        );
    }
}

export default withRouter(
    connect(
        null,
        { deleteNote }
    )(GotOne)
);
