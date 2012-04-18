ControlFeed = ControlFeed || {};
ControlFeed.Models = ControlFeed.Models || {};

ControlFeed.Models.SocialFeed = Backbone.Model.extend({
	
	url: "../../data/socialnetworks.json",
	
	initialize: function() {
		this.toJSON();
		console.log('Social Feeds initialized');
	}

});
