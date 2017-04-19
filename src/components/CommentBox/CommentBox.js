import React, { Component } from 'react';
import Comment from '../Comment';
import CommentForm from '../CommentForm'

class CommentBox extends Component {

    constructor() {
        super();
        this.state = {
            showComments: false,
            comments: []
        }
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        }

        this.setState({ comments: this.state.comments.concat([comment])});
    }

    _getComments() {
        return this.state.comments.map((c) => {
            return(<Comment author={c.author} body={c.body} key={c.id}/>)
        });
    }

    _getCommentsTitle(commentsCount) {
        if (commentsCount === 0) {
            return 'No comments yet';
        } else if (commentsCount === 1) {
            return '1 comment';
        } else {
            return `${commentsCount} comments`;
        }
    }

    _handleClick() {
        this.setState({showComments: !this.state.showComments});
    }

    render() {
        const comments = this._getComments();
        let buttonText = 'Show comments';
        let commentNodes;

        if (this.state.showComments) {
            buttonText = 'Hide comments';
            commentNodes = <div className="comments-list">{comments}</div>;
        }

        return(
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)}/>
                <h3>Comments</h3>
                <h4 className="comments-count">{this._getCommentsTitle(comments.length)}</h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }
}

export default CommentBox;