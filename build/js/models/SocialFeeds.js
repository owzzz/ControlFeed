ControlFeed = ControlFeed || {};
ControlFeed.Models = ControlFeed.Models || {};

ControlFeed.Models.SocialFeeds = Backbone.Model.extend({
	
	url: "../../data/socialnetworks.json",
	
	defaults: {
      title: "Social Network",
      link: "http://www.example.com"
    },
	
	initialize: function() {
		console.log('Social Feeds initialized');
	},

});
