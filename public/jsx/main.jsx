var data = [
	{
		author: "Y tu mama tambien", text: "las pelotas del marrano"
	}
];
// Tutorial
var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				<Comment author="Bolita">Pasa la noche con migo Bolita</Comment>
				<Comment author="Bolita2">Pasa la noche con migo Bolita2</Comment>
				<Comment author="Bolita3">Pasa la noche con migo Bolita3</Comment>
				<Comment author="Bolita4">Pasa la noche con migo Bolita4</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<div className="commentForm">
				Hello world! i am a CommentForm
			</div>
		);
	}
});

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">
			 <h1>Comments</h1>
			 <CommentList />
			 <CommentForm />
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('content')
);