var React = require('react');

var AdminLogin = React.createClass({
	
	checkLoginPass : function () {
		var login = document.getElementById("login").value;
		var pass = document.getElementById("password").value;
		if (login === "user" && pass === "123") {
			alert("You are welcome!");
		}
		else {
			alert("You are not authorized!");
		}
	},
	
  render: function() {
	  
	$(document).ready(function() {
		  $('.ui.form')
			.form({
			  fields: {
				username: {
				  identifier  : 'username',
				  rules: [
					{
					  type   : 'empty',
					  prompt : 'Please enter your user name'
					}
				  ]
				},
				password: {
				  identifier  : 'password',
				  rules: [
					{
					  type   : 'empty',
					  prompt : 'Please enter your password'
					}
				  ]
				}
			  }
			});
	});//document.ready
	  
    return (
	<div>
		<div className="ui title positive active message greenbgcolor">
				<i className="sidebar icon"></i>
				Admin
		</div>
		<div className="content active">
			
			<div className="ui middle aligned center aligned grid">
			  <div className="column eight wide">
				<h2 className="ui image header">
				  <div className="content">
					Admin Log-in 
				  </div>
				</h2>
				<form action="" className="ui large form">
				  <div className="ui stacked secondary  segment">
					<div className="field">
					  <div className="ui left icon input">
						<i className="user icon"></i>
						<input id="login" type="text" name="username" placeholder="Username" />
					  </div>
					</div>
					<div className="field">
					  <div className="ui left icon input">
						<i className="lock icon"></i>
						<input type="password" id="password" name="password" placeholder="Password" />
					  </div>
					</div>
					<div className="ui fluid large teal submit button" onClick={this.checkLoginPass} >Login</div>
				  </div>
				  <div className="ui error message"></div>
				</form>
			  </div>
			</div>
		</div>
	</div>
    ) // return
  } // render
}); //AdminLogin

module.exports=AdminLogin;