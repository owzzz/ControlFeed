ControlFeed = ControlFeed || {};
ControlFeed.Feeds = new Backbone.Collection([
	ControlFeed.Models.Facebook, 
	ControlFeed.Models.Instagram, 
	ControlFeed.Models.Twitter
]);
