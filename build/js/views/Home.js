ControlFeed = ControlFeed || {};
ControlFeed.Views = ControlFeed.Views || {};
ControlFeed.Views.Home = Backbone.View.extend({
	
	initialize: function() {
		this.render();
	},
	
	template: "<li id=\"fbAuth\" class=\"button fbButton\"><a href=\"#\" title=\"Login with Facebook\"><%= Title %></a></li>",

	tagName: "nav",

	className: "social-feeds-list",

	events: {
	  "click #fbAuth":    function(e) {e.preventDefault(); ControlFeed.Controllers.Facebook.init(); },
	  "click #twAuth":    function(e) {e.preventDefault(); ControlFeed.Controllers.Twitter.init(); },
	  "click #inAuth":    function(e) {e.preventDefault(); ControlFeed.Controllers.Instagram.init(); }
	},
	
	render: function() {
		// Compile the template using underscore
		var template = _.template( this.template, {Title: "facebook"} );
		// Load the compiled HTML into the Backbone "el"
		console.log(this.$el);
		this.$el.html( template );
	},
	
	model: new ControlFeed.Models.SocialFeed

});
