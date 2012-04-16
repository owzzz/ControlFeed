var ControlFeed = {
	Config: {
		siteUrl: "localhost"
	},
	init: function() {
		if(ControlFeed.Instagram){
			ControlFeed.Instagram.Auth.authUser();
		} else {
			console.log('Instagram Is not available');
		}
	}		
}

