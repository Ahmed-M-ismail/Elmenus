var React = require('react');

var CatList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem)
  },

  render: function() {
    return(
			<div className="ui item">
				<div className="ui message">
					<span className="header">{this.props.singleItem.name}</span>
					<p className="meta">{this.props.singleItem.description}</p>
					<div className="floatRight">
						<button className="ui olive button">Edit</button>
						<button className="ui red button" onClick={this.handleDelete}>Delete</button>
					</div>
					<div className="description">
						<span className="">Price: </span>
						<span> {this.props.singleItem.price}</span>
					</div>
				</div>
			</div>
    ) // return
  } // render
}); //CatList

module.exports=CatList;