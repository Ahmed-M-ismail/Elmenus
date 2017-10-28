var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');


var CatList = require('./CatList');
var AddCat = require('./AddCat');
var AdminLogin = require('./AdminLogin');




var MainInterface = React.createClass({
  getInitialState: function() {
    return {
		bodyVisible: false,
		Categories0: [],
		Categories1: [],
		catNames : []
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var allCats = result.categories;
	  var catNames = [];
	  var catItems = [];
		for(var i=0; i < allCats.length; i++){
			catNames.push(allCats[i].name);
			catItems.push(allCats[i].items);
		}
      this.setState({
			catNames: catNames,
			Categories0: catItems[0],
			Categories1: catItems[1]
      }); //setState
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  
  
	toggleAddDisplay: function() {
    var tempVisibility = !this.state.bodyVisible;
    this.setState({
      bodyVisible: tempVisibility
    }); //setState
  }, //toggleAddDisplay
  
  handleAdd: function(tempItem) {
    var tempCats = this.state.Categories0;
    tempCats.push(tempItem);
    this.setState({
      Categories0: tempCats
    }); //setState
  }, //addItem

  
    deleteMessage0: function(item) {
    var allCats = this.state.Categories0;
    var newCategories = _.without(allCats, item);
    this.setState({
      Categories0: newCategories
    }); //setState
  }, //deleteMessage

  
    deleteMessage: function(item) {
    var allCats = this.state.Categories1;
    var newCategories = _.without(allCats, item);
    this.setState({
      Categories1: newCategories
    }); //setState
  }, //deleteMessage
  
  render: function() {
		var myCategories0 = this.state.Categories0;
		
		myCategories0 = myCategories0.map(function(item, index) {
		  return(
			<CatList key = { index }
			  singleItem = { item }
			  whichItem = { item }
			  onDelete = { this.deleteMessage0 }
			  addItem = { this.handleAdd } />
			  
		  ) //return
		}.bind(this)); //myCategories0.map

		var myCategories1 = this.state.Categories1;
		
		myCategories1 = myCategories1.map(function(item, index) {
		  return(
			<CatList key = { index }
			  singleItem = { item }
			  whichItem = { item }
			  onDelete = { this.deleteMessage }
			  addItem = { this.handleAdd } />
		  ) //return
		}.bind(this)); //myCategories1.map
		return (
			<div className="ui styled accordion fluid">
				<AdminLogin  />
				<div className="ui title positive message greenbgcolor">
					<i className="sidebar icon"></i>
					{this.state.catNames[0]}
				</div>
				<div className="content">
				<AddCat bodyVisible = { this.state.bodyVisible } />
					<div className="">{myCategories0}</div>	 
				</div>				
				<div className="ui title positive message greenbgcolor">
					<i className="sidebar icon"></i>
					{this.state.catNames[1]}
				</div>
				<div className="content">
				<AddCat />
					<div className="">{myCategories1}</div>	 
				</div>
				<div className="marginBottom"></div>
			</div> 
		) //return 
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.getElementById('myRoot')
); //render
