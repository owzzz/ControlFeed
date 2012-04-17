ControlFeed = ControlFeed || {}

ControlFeed.Instagram = {
	Config: {
		clientId: "00c524b0ee9343109e33dcfa54e225fc",
		clientSecret: "6da54f68e48c4ccaae7d7b6ed4c93f17",
		callbackUrl: "http://" + ControlFeed.Config.siteUrl + "/controlFeed.index.html",
		authUrl: "https://api.instagram.com/oauth/authorize/?client_id=" + this.clientdId + "&redirect_uri=" + this.callbackUrl + "&response_type=code",
		authReturnedCode: ""
	},
	init: function() {
		
	}
};