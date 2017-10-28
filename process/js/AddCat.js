var React = require('react');

var AddCat = React.createClass({
	
  handleAdd: function(e) {
    var tempItem = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      price: this.refs.price.value
    } //tempItem
    e.preventDefault();
    this.props.addItem(tempItem);
  }, //handleAdd
	


  render: function () {
	  
    var displayBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };
	
    return (
	<div style={ displayBody }>
		<div className="ui title positive message greenbgcolor">
				<i className="sidebar icon"></i>
				Add Category
		</div>
		<div className="content">
			<div className="ui input inline fields">
				<input type="text" placeholder="English Name *"  ref="name" />
				<textarea rows="2" cols="30" placeholder="English Description"  ref="description" ></textarea>
				<input type="number" placeholder="price *"  ref="price" />
			</div>	  
			<bottom className="ui green button" onClick={this.handleAdd}>Create Category</bottom>
		</div>
	</div>
    ) // return
  } // render
}); //AddCat

module.exports=AddCat;