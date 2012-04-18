var ControlFeed = {
	Config: {
		siteUrl: "localhost"
	},
	init: function() {
		//Set a delay before initialising views & models
		//Make sure all js files have loaded in
		
		//TODO: Replace this timeout with require.js
		setTimeout(function() {
			var homeView = new ControlFeed.Views.Home({ el: $("nav.social-feeds-list") });
		}, 100);
	}		
}

ControlFeed.init();

