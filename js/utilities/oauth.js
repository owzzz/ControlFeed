ControlFeed = ControlFeed || {};

ControlFeed.oauth = {
	authUser: function (feedNetwork){
		var parentObj = this.feedNetwork.Config;
		$.ajax({
			url: parentObj.authUrl,
			async: true,
			cache: false,
			dataType: json,
			success: function (response) {
				console.log(response);
			},
			error: function ( jqXHR, textStatus, errorThrown ) {
				console.log(jqXHR, textStatus, errorThrown);
			}
		});
	},
	getAuthReturnedCode: function (feedNetwork) {
		return this.feedNetwork.Config.AuthReturnedCode;
	},
	setAuthCode: function (feedNetwork, code){
		if (!this.feedNetwork.Auth.isAuthCodeSet) {
			localStorage.setItem(feedNetwork + '-authReturnedCode', code);
		} else {
			this.feedNetwork.Auth.redirectUser();
		}
	},
	isAuthCodeSet: function (key) {
		var key = localStorage.getItem(key);
		if (key !== null) {
			return true;
		} else {
			return false;
		}
	},
	redirectUser: function (feedNetwork) {
		var code = localStorage.getItem(feedNetwork + '-authReturnedCode');
		if (code != null && typeof code === string) {
			window.location.href = location.protocol + "//" + ControlFeed.Config.siteUrl + "/?code=" + code;
		} else {
			window.location.href = this.feedNetwork.Config.authUrl;
		}
	}		
};