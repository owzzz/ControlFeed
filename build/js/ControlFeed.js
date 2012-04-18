var ControlFeed = {
	Config: {
		siteUrl: "localhost"
	},
	init: function() {
		//Set a delay before initialising views & models
		//Make sure all 
		setTimeout(function() {
			var homeView = new ControlFeed.Views.Home;
		}, 100);
	}		
}

ControlFeed.init();

