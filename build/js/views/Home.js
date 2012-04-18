ControlFeed = ControlFeed || {};
ControlFeed.Views = ControlFeed.Views || {};
ControlFeed.Views.Home = Backbone.View.extend({
	
	initialize: function() {
		console.log('this inside View init');
		this.render();
	},
	
	template: "",

	tagName: "ul",

	className: "social-feeds",

	events: {
	  "click #fbAuth":    function(e) { console.log(e); e.preventDefault(); ControlFeed.Facebook.init(); },
	  "click #twAuth":    function(e) {e.preventDefault(); ControlFeed.Twitter.init(); },
	  "click #inAuth":    function(e) {e.preventDefault(); ControlFeed.Instagram.init(); }
	},
	
	render: function() {
		console.log('render view');
	},
	
	model: {}

});
