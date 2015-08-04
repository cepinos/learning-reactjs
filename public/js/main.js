// Tutorial
"use strict";

var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			this.props.children
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentList" },
			React.createElement(
				Comment,
				{ author: "Bolita" },
				"Pasa la noche con migo Bolita"
			),
			React.createElement(
				Comment,
				{ author: "Bolita2" },
				"Pasa la noche con migo Bolita2"
			),
			React.createElement(
				Comment,
				{ author: "Bolita3" },
				"Pasa la noche con migo Bolita3"
			),
			React.createElement(
				Comment,
				{ author: "Bolita4" },
				"Pasa la noche con migo Bolita4"
			)
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"Hello world! i am a CommentForm"
		);
	}
});

var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, null),
			React.createElement(CommentForm, null)
		);
	}
});

React.render(React.createElement(CommentBox, null), document.getElementById('content'));

