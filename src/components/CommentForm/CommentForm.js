import React, { Component } from 'react';

class CommentForm extends Component {

    _handleSubmit(event) {
        event.preventDefault();

        let author = this._author.value;
        let body = this._body.value;

        this.props.addComment(author, body);
    }

    render() {
        return(
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion</label>
                <div className="comment-form-fields">
                    <input placeholder="Name" ref={(input) => this._author = input}/><br />
                    <textarea placeholder="Comment" ref={(textarea) => this._body = textarea}></textarea>
                </div>
                <br />
                <div className="comment-form-actions">
                    <button type="submit">Post comment</button>
                </div>
            </form>
        );
    }

}

export default CommentForm;